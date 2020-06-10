/* tslint:disable:no-invalid-this */
import {
    ContextAwareStateOptions,
    LimeWebComponent,
    LimeWebComponentContext,
    LimeWebComponentPlatform,
    StateOptions,
} from '@limetech/lime-web-components-interfaces';
import { getElement } from '@stencil/core';
import { BehaviorSubject, Subject } from 'rxjs';

export * from './state/application-name';
export * from './state/configs';
export * from './state/current-user';
export * from './state/device';
export * from './state/filters';
export * from './state/limeobjects';
export * from './state/limetypes';
export * from './state/session';

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

interface ComponentMapping {
    component: Component;
    properties: Property[];
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
        const componentMapping = getComponentMapping(
            target,
            property,
            options,
            config
        );

        if (componentMapping.properties.length === 1) {
            extendLifecycleMethods(target, componentMapping.properties);
        }
    };
}

const componentMappings: ComponentMapping[] = [];
const contexts = new WeakMap<object, LimeWebComponentContext>();
const contextObservables = new WeakMap<
    object,
    Subject<LimeWebComponentContext>
>();

/**
 * Get mappings for a component, containing the properties with a state decorator for
 * the current component
 *
 * @param {Component} component the component class containing the decorator
 * @param {string} property name of the property
 * @param {StateOptions} options decorator options
 * @param {StateDecoratorConfig} config decorator configuration
 *
 * @returns {ComponentMapping} mappings for the component
 */
function getComponentMapping(
    component: Component,
    property: string,
    options: StateOptions,
    config: StateDecoratorConfig
): ComponentMapping {
    let mapping: ComponentMapping = componentMappings.find(
        (item) => item.component === component
    );
    if (!mapping) {
        mapping = {
            properties: [],
            component: component,
        };
        componentMappings.push(mapping);
    }

    mapping.properties.push({
        options: options,
        name: property,
        service: {
            name: config.name,
            method: config.method || 'subscribe',
        },
    });

    return mapping;
}

interface Subscription {
    instance: any;
    unsubscribes: (() => void)[];
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
    const subscriptions: Subscription[] = [];

    component.componentWillLoad = async function (...args) {
        await ensureLimeProps(this);

        const observable = new BehaviorSubject(this.context);
        contexts.set(this, this.context);
        contextObservables.set(this, observable);

        properties.forEach((property) => {
            if (isContextAware(property.options)) {
                property.options.context = observable;
            }

            subscribe.apply(this, [subscriptions, property]);
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

        unsubscribeAll.apply(this, [subscriptions]);
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
 * Use as `subscription.apply(componentToAugment, [subscriptions, property])`.
 *
 * @param {Subscription[]} subscriptions existing subscriptions on the component
 * @param {Property} property property to update when subscription triggers
 *
 * @returns {void}
 */
function subscribe(subscriptions: Subscription[], property: Property) {
    let subscription = subscriptions.find((item) => item.instance === this);
    if (!subscription) {
        subscription = {
            instance: this,
            unsubscribes: [],
        };

        subscriptions.push(subscription);
    }

    const unsubscribe = createSubscription.apply(this, [
        property.options,
        property.name,
        property.service.name,
        property.service.method,
    ]);

    subscription.unsubscribes.push(unsubscribe);
}

/**
 * Unsubscribe to changes from the state
 *
 * @param {Subscription[]} subscriptions existing subscriptions on the component
 *
 * @returns {void}
 */
function unsubscribeAll(subscriptions: Subscription[] = []) {
    const subscription = subscriptions.find((item) => item.instance === this);
    subscription.unsubscribes.forEach((unsubscribe) => unsubscribe());
    for (let i = subscriptions.length - 1; i >= 0; i--) {
        const item = subscriptions[i];
        if (item.instance !== this) {
            continue;
        }

        subscriptions.splice(i, 1);
    }
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
 * Use as `createSubscription.apply(componentToAugment, [options, property, name, method])`.
 *
 * @param {StateOptions} options options for the selector
 * @param {string} property name of the property on the component
 * @param {string} name name of the state service
 * @param {string} method name of method on the state service
 *
 * @returns {Function} unsubscribe function
 */
function createSubscription(
    options: StateOptions,
    property: string,
    name: string,
    method: string
) {
    const myOptions = { ...options };
    bindFunctions(myOptions, this);

    const platform: LimeWebComponentPlatform = this.platform;
    if (!platform.has(name)) {
        throw new Error(`Service ${name} does not exist`);
    }

    const service: any = platform.get(name);

    return service[method](mapState(this, property), myOptions);
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
