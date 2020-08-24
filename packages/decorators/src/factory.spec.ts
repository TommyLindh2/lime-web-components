/* eslint-disable max-classes-per-file */
let getElement: () => any;

jest.mock('@stencil/core', () => {
    const original = jest.requireActual('@stencil/core');

    return {
        ...original,
        getElement: () => getElement(),
    };
});

import { createStateDecorator } from './factory';
import { Subject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

describe('createStateDecorator', () => {
    let platform;
    let context;
    let service: TestService;

    beforeEach(() => {
        service = new TestService();
        const services = {
            test: service,
        };
        platform = {
            has: jest.fn((name) => name in services),
            get: jest.fn((name) => services[name]),
        };
        context = {};
    });

    describe('when using a state decorator on a property', () => {
        it('adds required lifecycle hooks on the component', () => {
            const Decorator = () => createStateDecorator({}, { name: 'test' });
            class MyComponent {
                @Decorator()
                foo: any;
            }
            const component: any = new MyComponent();

            expect(typeof component.connectedCallback).toEqual('function');
            expect(typeof component.componentWillLoad).toEqual('function');
            expect(typeof component.componentWillUpdate).toEqual('function');
            expect(typeof component.componentDidUnload).toEqual('function');
            expect(typeof component.disconnectedCallback).toEqual('function');
        });
    });

    describe('when more than one property is decorated', () => {
        it('only extends the lifecycle methods once', () => {
            const Decorator = () => createStateDecorator({}, { name: 'test' });
            class MyComponent {
                @Decorator()
                foo: any;

                bar: any;
            }
            const component: any = new MyComponent();

            const connectedCallback = component.connectedCallback;
            const componentWillLoad = component.componentWillLoad;
            const componentWillUpdate = component.componentWillUpdate;
            const componentDidUnload = component.componentDidUnload;
            const disconnectedCallback = component.disconnectedCallback;

            Decorator()(MyComponent.prototype, 'bar');

            expect(component.connectedCallback).toEqual(connectedCallback);
            expect(component.componentWillLoad).toEqual(componentWillLoad);
            expect(component.componentWillUpdate).toEqual(componentWillUpdate);
            expect(component.componentDidUnload).toEqual(componentDidUnload);
            expect(component.disconnectedCallback).toEqual(
                disconnectedCallback
            );
        });
    });

    describe('when lifecycle hooks already exist', () => {
        it('overwrites the lifecycle hooks', () => {
            const Decorator = () => createStateDecorator({}, { name: 'test' });
            class MyComponent {
                foo: any;

                connectedCallback() {}
                componentWillLoad() {}
                componentWillUpdate() {}
                componentDidUnload() {}
                disconnectedCallback() {}
            }
            const component: any = new MyComponent();

            const connectedCallback = component.connectedCallback;
            const componentWillLoad = component.componentWillLoad;
            const componentWillUpdate = component.componentWillUpdate;
            const componentDidUnload = component.componentDidUnload;
            const disconnectedCallback = component.disconnectedCallback;

            Decorator()(MyComponent.prototype, 'foo');

            expect(component.connectedCallback).not.toEqual(connectedCallback);
            expect(component.componentWillLoad).not.toEqual(componentWillLoad);
            expect(component.componentWillUpdate).not.toEqual(
                componentWillUpdate
            );
            expect(component.componentDidUnload).not.toEqual(
                componentDidUnload
            );
            expect(component.disconnectedCallback).not.toEqual(
                disconnectedCallback
            );
        });
    });

    describe('when invoking connectedCallback without required properties', () => {
        let component: any;
        let element: any;

        beforeEach(() => {
            const Decorator = () => createStateDecorator({}, { name: 'test' });
            class MyComponent {
                @Decorator()
                foo: any;
            }
            component = new MyComponent();
            element = { platform: null, context: null };
            getElement = () => element;
        });

        it('returns a promise that does not resolve', () => {
            expect.assertions(0);
            component.connectedCallback().then(() => {
                expect(false).toBeTruthy();
            });
        });

        it('returns a promise that resolves when platform and context has been set', () => {
            expect.assertions(1);
            component.connectedCallback().then(() => {
                expect(true).toBeTruthy();
            });
            component.platform = platform;
            component.context = context;
            element.platform = platform;
            element.context = context;
        });
    });

    describe('when invoking connectedCallback or componentWillLoad with required properties', () => {
        let component;
        beforeEach(() => {
            component = createComponent();
        });

        it('creates a subscription on the service', async () => {
            await component.connectedCallback();
            expect(service.getSubscriptions().length).toEqual(1);
        });

        it('creates a subscription on the service', async () => {
            await component.componentWillLoad();
            expect(service.getSubscriptions().length).toEqual(1);
        });

        describe('when invoking both connectedCallback and componentWillLoad', () => {
            it('creates only one subscription on the service', async () => {
                await component.connectedCallback();
                await component.componentWillLoad();
                expect(service.getSubscriptions().length).toEqual(1);
            });
        });
    });

    describe('when multiple properties are decorated', () => {
        let component;
        beforeEach(() => {
            component = createComponent({ foo: true, bar: true });
        });

        it('connectedCallback creates a subscription for each property', async () => {
            await component.connectedCallback();
            expect(service.getSubscriptions().length).toEqual(2);
        });
    });

    describe('when invoking disconnectedCallback', () => {
        let component;
        beforeEach(async () => {
            component = createComponent({ foo: true, bar: true });
            await component.connectedCallback();
        });

        it('removes the subscriptions', () => {
            expect(service.getSubscriptions().length).toEqual(2);
            component.disconnectedCallback();
            expect(service.getSubscriptions().length).toEqual(0);
        });

        describe('when invoked multiple times', () => {
            it('does not crash', async () => {
                expect(service.getSubscriptions().length).toEqual(2);
                component.disconnectedCallback();
                expect(service.getSubscriptions().length).toEqual(0);
                expect(() => component.disconnectedCallback()).not.toThrow();
            });
        });

        describe('when a component is inserted in the DOM again after being removed', () => {
            it('creates a subscription on the service again', async () => {
                expect(service.getSubscriptions().length).toEqual(2);
                component.disconnectedCallback();
                expect(service.getSubscriptions().length).toEqual(0);
                await component.connectedCallback();
                expect(service.getSubscriptions().length).toEqual(2);
            });
        });
    });

    describe('when context is set on options', () => {
        let component;
        let options;
        beforeEach(async () => {
            options = { context: null };
            component = createComponent({ foo: true, bar: true }, options);
            await component.connectedCallback();
        });

        it('sets the context option to an observable', () => {
            expect(options.context).toBeInstanceOf(Subject);
        });

        describe('when componentWillUpdate is invoked without a context change', () => {
            it('does not emit a value on the observable', async () => {
                const spy = jest.spyOn(options.context, 'next');
                await component.componentWillUpdate();
                expect(spy).not.toHaveBeenCalled();
            });
        });

        describe('when componentWillUpdate is invoked with a context change', () => {
            it('emits a value on the observable', async () => {
                const spy = jest.spyOn(options.context, 'next');
                component.context = 'new context';
                await component.componentWillUpdate();
                expect(spy).toHaveBeenCalled();

                const subject: Observable<any> = options.context;
                const value = await subject.pipe(take(1)).toPromise();
                expect(value).toEqual('new context');
            });
        });
    });

    describe('when component has lifecycle methods', () => {
        let component;
        let options;
        let methods;

        beforeEach(async () => {
            options = { context: null };
            methods = {
                connectedCallback: jest.fn(),
                componentWillLoad: jest.fn(),
                componentWillUpdate: jest.fn(),
                componentDidUnload: jest.fn(),
                disconnectedCallback: jest.fn(),
            };
            component = createComponent(
                { foo: true, bar: true },
                options,
                methods
            );
        });

        it('connectedCallback invokes the original connectedCallback', async () => {
            expect(methods.connectedCallback).toHaveBeenCalledTimes(0);
            expect(component.connectedCallback).not.toEqual(
                methods.connectedCallback
            );

            await component.connectedCallback();

            expect(methods.connectedCallback).toHaveBeenCalledTimes(1);
        });

        it('componentWillLoad invokes the original componentWillLoad', async () => {
            expect(methods.componentWillLoad).toHaveBeenCalledTimes(0);
            expect(component.componentWillLoad).not.toEqual(
                methods.componentWillLoad
            );

            await component.componentWillLoad();

            expect(methods.componentWillLoad).toHaveBeenCalledTimes(1);
        });

        describe('when connectedCallback is invoked first', () => {
            it('componentWillLoad invkoes the original componentWillLoad', async () => {
                expect(methods.componentWillLoad).toHaveBeenCalledTimes(0);
                expect(component.componentWillLoad).not.toEqual(
                    methods.componentWillLoad
                );

                await component.connectedCallback();
                await component.componentWillLoad();

                expect(methods.componentWillLoad).toHaveBeenCalledTimes(1);
            });
        });

        it('componentWillUpdate invokes the original componentWillUpdate', async () => {
            expect(methods.componentWillUpdate).toHaveBeenCalledTimes(0);
            expect(component.componentWillUpdate).not.toEqual(
                methods.componentWillUpdate
            );

            await component.connectedCallback();
            component.componentWillUpdate();

            expect(methods.componentWillUpdate).toHaveBeenCalledTimes(1);
        });

        it('componentDidUnload invokes the original componentDidUnload', async () => {
            expect(methods.componentDidUnload).toHaveBeenCalledTimes(0);
            expect(component.componentDidUnload).not.toEqual(
                methods.componentDidUnload
            );

            await component.connectedCallback();
            component.componentDidUnload();

            expect(methods.componentDidUnload).toHaveBeenCalledTimes(1);
        });

        it('disconnectedCallback invokes the original disconnectedCallback', async () => {
            expect(methods.disconnectedCallback).toHaveBeenCalledTimes(0);
            expect(component.disconnectedCallback).not.toEqual(
                methods.disconnectedCallback
            );

            await component.connectedCallback();
            component.disconnectedCallback();

            expect(methods.disconnectedCallback).toHaveBeenCalledTimes(1);
        });
    });

    function createComponent(
        props: object = { foo: 'bar' },
        options = {},
        methods = {}
    ) {
        const Decorator = (o) => createStateDecorator(o, { name: 'test' });
        class MyComponent {
            platform: any;
            context: any;
        }

        Object.keys(methods).forEach((method) => {
            MyComponent.prototype[method] = methods[method];
        });

        const component = new MyComponent();
        component.platform = platform;
        component.context = context;

        Object.keys(props).forEach((key) => {
            Decorator(options)(MyComponent.prototype, key);
        });

        return component;
    }
});

class TestService {
    private subscriptions = [];

    subscribe(...args) {
        this.subscriptions.push(args);

        return () => {
            this.subscriptions = this.subscriptions.filter(
                (item) => item !== args
            );
        };
    }

    getSubscriptions() {
        return this.subscriptions;
    }
}
