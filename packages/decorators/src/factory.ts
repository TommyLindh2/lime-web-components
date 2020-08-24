import {
    ContextAwareStateOptions,
    LimeWebComponent,
    LimeWebComponentContext,
    LimeWebComponentPlatform,
    StateOptions,
} from '@limetech/lime-web-components-interfaces';
import { getElement } from '@stencil/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface StateDecoratorConfig {
    /**
     * Name of the state service to use in the platform
     */
    name: string;

    /**
     * Name of the method on the service to use
     */
    method?: string;
}

interface Component {
    componentWillLoad: () => void | Promise<void>;
    componentWillUpdate: () => void | Promise<void>;
    componentDidUnload: () => void;
}

interface Property {
    name: string;
    options: StateOptions;
    service: {
        name: string;
        method: string;
    };
}

/**
 * Create a new state decorator
 *
 * @param {StateOptions} options decorator options
 * @param {StateDecoratorConfig} config decorator configuration
 *
 * @returns {Function} state decorator
 */
export function createStateDecorator(
    options: StateOptions,
    config: StateDecoratorConfig
): PropertyDecorator {
    return (target: Component, property: string) => {
        const properties = getComponentProperties(
            target,
            property,
            options,
            config
        );

        if (properties.length === 1) {
            extendLifecycleMethods(target, properties);
        }
    };
}

const componentProperties = new WeakMap<Component, Property[]>();
const contexts = new WeakMap<object, LimeWebComponentContext>();
const contextObservables = new WeakMap<
    object,
    Subject<LimeWebComponentContext>
>();
const componentSubscriptions = new WeakMap<any, Array<() => void>>();

/**
 * Get properties data for a component
 *
 * @param {Component} component the component class containing the decorator
 * @param {string} property name of the property
 * @param {StateOptions} options decorator options
 * @param {StateDecoratorConfig} config decorator configuration
 *
 * @returns {Property[]} properties data for the component
 */
function getComponentProperties(
    component: Component,
    property: string,
    options: StateOptions,
    config: StateDecoratorConfig
): Property[] {
    let properties = componentProperties.get(component);
    if (!properties) {
        properties = [];
        componentProperties.set(component, properties);
    }

    properties.push({
        options: options,
        name: property,
        service: {
            name: config.name,
            method: config.method || 'subscribe',
        },
    });

    return properties;
}

/**
 * Extend the lifecycle methods on the component
 *
 * @param {Component} component the component to extend
 * @param {Property[]} properties the properties with which to extend the component
 *
 * @returns {void}
 */
function extendLifecycleMethods(component: Component, properties: Property[]) {
    const originalComponentWillLoad = component.componentWillLoad;
    const originalComponentWillUpdate = component.componentWillUpdate;
    const originalComponentDidUnload = component.componentDidUnload;

    component.componentWillLoad = async function (...args) {
        componentSubscriptions.set(this, []);
        await ensureLimeProps(this);

        const observable = new BehaviorSubject(this.context);
        contexts.set(this, this.context);
        contextObservables.set(this, observable);

        properties.forEach((property) => {
            if (isContextAware(property.options)) {
                property.options.context = observable;
            }

            subscribe(this, property);
        });

        if (originalComponentWillLoad) {
            return originalComponentWillLoad.apply(this, args);
        }
    };

    component.componentWillUpdate = async function (...args) {
        const context = contexts.get(this);
        if (context !== this.context) {
            contexts.set(this, this.context);

            const observable = contextObservables.get(this);
            observable.next(this.context);
        }

        if (originalComponentWillUpdate) {
            return originalComponentWillUpdate.apply(this, args);
        }
    };

    component.componentDidUnload = function (...args) {
        if (originalComponentDidUnload) {
            originalComponentDidUnload.apply(this, args);
        }

        unsubscribeAll(this);
    };
}

/**
 * Check if the options are context aware
 *
 * @param {object} options state decorator options
 *
 * @returns {boolean} true if the options are context aware
 */
function isContextAware(options: object): options is ContextAwareStateOptions {
    return 'context' in options;
}

/**
 * Make sure that all required lime properties are set on the web component
 *
 * @param {LimeWebComponent} target the web component
 *
 * @returns {Promise<any>} a promise that resolves when all properties are defined
 */
function ensureLimeProps(target: LimeWebComponent): Promise<any> {
    const promises = [];
    if (!target.platform) {
        promises.push(waitForProp(target, 'platform'));
    }

    if (!target.context) {
        promises.push(waitForProp(target, 'context'));
    }

    if (!promises.length) {
        return Promise.resolve();
    }

    return Promise.all(promises);
}

/**
 * Wait for a property to be defined on an object
 *
 * @param {LimeWebComponent} target the web component
 * @param {string} property the name of the property to watch
 *
 * @returns {Promise<void>} a promise that will resolve when the property is set on the object
 */
function waitForProp(
    target: LimeWebComponent,
    property: string
): Promise<void> {
    const element = getElement(target);

    return new Promise((resolve) => {
        Object.defineProperty(element, property, {
            set: (value: any) => {
                delete element[property];
                element[property] = value;
                resolve();
            },
        });
    });
}

/**
 * Subscribe to changes from the state
 *
 * @param {any} component the component instance
 * @param {Property} property property to update when subscription triggers
 *
 * @returns {void}
 */
function subscribe(component: any, property: Property): void {
    const subscription = createSubscription(component, property);
    const subscriptions = componentSubscriptions.get(component);
    subscriptions.push(subscription);
}

/**
 * Unsubscribe to changes from the state
 *
 * @param {any} component the instance of the component
 *
 * @returns {void}
 */
function unsubscribeAll(component: any): void {
    const subscriptions = componentSubscriptions.get(component);

    subscriptions.forEach((unsubscribe) => unsubscribe());
    componentSubscriptions.set(component, []);
}

/**
 * Get a function that accepts a state, and updates the given property
 * on the given component with that state
 *
 * @param {any} instance the component to augment
 * @param {string} property name of the property on the component
 *
 * @returns {Function} updates the state
 */
function mapState(instance: any, property: string) {
    return (state: any) => {
        instance[property] = state;
    };
}

/**
 * Create a state subscription
 *
 * @param {any} component the component instance
 * @param {Property} property the property on the component
 *
 * @returns {Function} unsubscribe function
 */
function createSubscription(component: any, property: Property): () => void {
    const myOptions = { ...property.options };
    bindFunctions(myOptions, component);
    const name = property.service.name;

    const platform: LimeWebComponentPlatform = component.platform;
    if (!platform.has(name)) {
        throw new Error(`Service ${name} does not exist`);
    }

    const service: any = platform.get(name);

    return service[property.service.method](
        mapState(component, property.name),
        myOptions
    );
}

/**
 * Bind connect functions to the current scope
 *
 * @param {StateOptions} options options for the selector
 * @param {*} scope the current scope to bind to
 *
 * @returns {void}
 */
function bindFunctions(options: StateOptions, scope: any) {
    if (options.filter) {
        options.filter = options.filter.map((func) => func.bind(scope));
    }

    if (options.map) {
        options.map = options.map.map((func) => func.bind(scope));
    }
}
