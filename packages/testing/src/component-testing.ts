import { SpecPage } from '@stencil/core/testing';
import { getElement } from '@stencil/core';
import { defaultContext, createPlatform } from './platform';

export interface ComponentProps {
    [name: string]: any;
}

export interface ComponentListeners {
    [name: string]: (event: CustomEvent<any>) => void;
}

export interface ComponentConfig {
    /**
     * Tag name of the component
     */
    tag: string;

    /**
     * The props to give the component when it is created
     */
    props?: ComponentProps;

    /**
     * The initial state to give the component when it is created
     */
    state?: object;

    /**
     * Any listeners to attach to the component
     */
    listeners?: ComponentListeners;

    /**
     * A list of elements to append to the created component before it's inserted into the DOM
     */
    children?: HTMLElement[];
}

interface Hooks {
    [key: string]: () => void;
}

const componentConfigs = new WeakMap<any, ComponentConfig>();
const componentInstances = new WeakMap<HTMLElement, any>();
const originalHooks = new WeakMap<any, Hooks>();
const destroyFunctions = new WeakMap<HTMLElement, () => void>();

/**
 * Create a new component
 *
 * @param {*} component the component class
 * @param {SpecPage} page the page to create the component on
 * @param {ComponentConfig} config component configuration
 *
 * @returns {HTMLElement} the component
 */
export function createComponent(
    component: any,
    page: SpecPage,
    config: ComponentConfig
): HTMLElement {
    componentConfigs.set(component.prototype, config);
    extendLifecycleHook(
        component.prototype,
        'componentWillLoad',
        initComponent
    );

    const element = page.doc.createElement(config.tag);
    const props = config.props || {};
    const listeners = config.listeners || {};
    const children = config.children || [];

    setDefault(props);
    addProps(props, element);
    addListeners(listeners, element);
    addChildren(element, children);

    destroyFunctions.set(element, () => {
        removeListeners(listeners, element);
    });

    page.body.appendChild(element);

    return element;
}

/**
 * Destroy a component that was created by the `createComponent` function
 *
 * @param {HTMLElement} component the component to destroy
 *
 * @returns {void}
 */
export function destroyComponent(component: HTMLElement): void {
    if (!component) {
        return;
    }

    const destroyFunction = destroyFunctions.get(component);
    if (!destroyFunction) {
        return;
    }

    destroyFunction();
}

/**
 * Set a state variable on the component
 *
 * @param {HTMLElement} component the component
 * @param {object} state the state variables to set along with their values
 *
 * @returns {void}
 */
export function setState(component: HTMLElement, state: object) {
    const instance = componentInstances.get(component);
    Object.assign(instance, state);
}

/**
 * Init a component that is under test
 *
 * This is called just before the `componentWillLoad` lifecycle hook
 * of the component and is a good place to save the component instance
 * and set the initial state
 *
 * @returns {void}
 */
function initComponent() {
    const element = getElement(this);
    componentInstances.set(element, this);

    const config = componentConfigs.get(this.constructor.prototype);
    if (config?.state) {
        setState(element, config.state);
    }
}

/**
 * Extend a lifecycle hook on a component
 *
 * @param {*} component the prototype of the component
 * @param {string} name the name of the hook
 * @param {Function} hook the function to run before the original hook
 *
 * @returns {void}
 */
function extendLifecycleHook(component: any, name: string, hook: () => void) {
    if (!originalHooks.has(component)) {
        originalHooks.set(component, {});
    }

    const hooks = originalHooks.get(component);
    if (!hooks[name]) {
        hooks[name] = component[name];
    }

    component[name] = function (...args) {
        hook.apply(this, args);
        if (hooks[name]) {
            return hooks[name].apply(this, args);
        }
    };
}

/**
 * Sets a default props on the component
 *
 * Will set a default platform and context if not already set
 *
 * @param {ComponentProps} props the component props
 *
 * @returns {void}
 */
function setDefault(props: ComponentProps) {
    if (!('platform' in props)) {
        props.platform = createPlatform();
    }

    if (!('context' in props)) {
        props.context = defaultContext;
    }
}

/**
 * Add properties to a web component
 *
 * @param {ComponentProps} props the properties to set
 * @param {HTMLElement} component the web component
 *
 * @returns {void}
 */
function addProps(props: ComponentProps, component: HTMLElement): void {
    Object.entries(props).forEach(([key, value]) => {
        component[key] = value;
    });
}

/**
 * Add event listeners to a web component
 *
 * @param {ComponentListeners} listeners the events to listen to
 * @param {HTMLElement} component the web component
 *
 * @returns {void}
 */
function addListeners(
    listeners: ComponentListeners,
    component: HTMLElement
): void {
    Object.entries(listeners).forEach(([key, value]) => {
        component.addEventListener(key, value);
    });
}

/**
 * Remove event listeners from a web component
 *
 * @param {ComponentListeners} listeners the events to listen to
 * @param {HTMLElement} component the web component
 *
 * @returns {void}
 */
function removeListeners(
    listeners: ComponentListeners,
    component: HTMLElement
): void {
    Object.entries(listeners).forEach(([key, value]) => {
        component.removeEventListener(key, value);
    });
}

/**
 * Appends children to an html element
 *
 * @param {HTMLElement} parent the parent element
 * @param {HTMLElement[]} children the child elements to add
 *
 * @returns {void}
 */
function addChildren(parent: HTMLElement, children: HTMLElement[] = []): void {
    [].slice.call(children).forEach((child) => {
        parent.appendChild(child);
    });
}
