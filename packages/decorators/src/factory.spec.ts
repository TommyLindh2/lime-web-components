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

            expect(typeof component.componentWillLoad).toEqual('function');
            expect(typeof component.componentWillUpdate).toEqual('function');
            expect(typeof component.componentDidUnload).toEqual('function');
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

            const componentWillLoad = component.componentWillLoad;
            const componentWillUpdate = component.componentWillUpdate;
            const componentDidUnload = component.componentDidUnload;

            Decorator()(MyComponent.prototype, 'bar');

            expect(component.componentWillLoad).toEqual(componentWillLoad);
            expect(component.componentWillUpdate).toEqual(componentWillUpdate);
            expect(component.componentDidUnload).toEqual(componentDidUnload);
        });
    });

    describe('when lifecycle hooks already exist', () => {
        it('overwrites the lifecycle hooks', () => {
            const Decorator = () => createStateDecorator({}, { name: 'test' });
            class MyComponent {
                foo: any;

                componentWillLoad() {}
                componentWillUpdate() {}
                componentDidUnload() {}
            }
            const component: any = new MyComponent();

            const componentWillLoad = component.componentWillLoad;
            const componentWillUpdate = component.componentWillUpdate;
            const componentDidUnload = component.componentDidUnload;

            Decorator()(MyComponent.prototype, 'foo');

            expect(component.componentWillLoad).not.toEqual(componentWillLoad);
            expect(component.componentWillUpdate).not.toEqual(
                componentWillUpdate
            );
            expect(component.componentDidUnload).not.toEqual(
                componentDidUnload
            );
        });
    });

    describe('when invoking componentWillLoad without required properties', () => {
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
            component.componentWillLoad().then(() => {
                expect(false).toBeTruthy();
            });
        });

        it('returns a promise that resolves when platform and context has been set', () => {
            expect.assertions(1);
            component.componentWillLoad().then(() => {
                expect(true).toBeTruthy();
            });
            component.platform = platform;
            component.context = context;
            element.platform = platform;
            element.context = context;
        });
    });

    describe('when invoking componentWillLoad with required properties', () => {
        let component;
        beforeEach(() => {
            component = createComponent();
        });

        it('creates a subscription on the service', async () => {
            await component.componentWillLoad();
            expect(service.getSubscriptions().length).toEqual(1);
        });
    });

    describe('when multiple properties are decorated', () => {
        let component;
        beforeEach(() => {
            component = createComponent({ foo: true, bar: true });
        });

        it('componentWillLoad creates a subscription for each property', async () => {
            await component.componentWillLoad();
            expect(service.getSubscriptions().length).toEqual(2);
        });
    });

    describe('when invoking componentDidUnload', () => {
        let component;
        beforeEach(async () => {
            component = createComponent({ foo: true, bar: true });
            await component.componentWillLoad();
        });

        it('removes the subscriptions', () => {
            expect(service.getSubscriptions().length).toEqual(2);
            component.componentDidUnload();
            expect(service.getSubscriptions().length).toEqual(0);
        });
    });

    describe('when context is set on options', () => {
        let component;
        let options;
        beforeEach(async () => {
            options = { context: null };
            component = createComponent({ foo: true, bar: true }, options);
            await component.componentWillLoad();
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
                componentWillLoad: jest.fn(),
                componentWillUpdate: jest.fn(),
                componentDidUnload: jest.fn(),
            };
            component = createComponent(
                { foo: true, bar: true },
                options,
                methods
            );
        });

        it('componentWillLoad invokes the original componentWillLoad', async () => {
            expect(methods.componentWillLoad).toHaveBeenCalledTimes(0);
            expect(component.componentWillLoad).not.toEqual(
                methods.componentWillLoad
            );

            await component.componentWillLoad();

            expect(methods.componentWillLoad).toHaveBeenCalledTimes(1);
        });

        it('componentWillUpdate invokes the original componentWillUpdate', async () => {
            expect(methods.componentWillUpdate).toHaveBeenCalledTimes(0);
            expect(component.componentWillUpdate).not.toEqual(
                methods.componentWillUpdate
            );

            await component.componentWillLoad();
            component.componentWillUpdate();

            expect(methods.componentWillUpdate).toHaveBeenCalledTimes(1);
        });

        it('componentDidUnload invokes the original componentDidUnload', async () => {
            expect(methods.componentDidUnload).toHaveBeenCalledTimes(0);
            expect(component.componentDidUnload).not.toEqual(
                methods.componentDidUnload
            );

            await component.componentWillLoad();
            component.componentDidUnload();

            expect(methods.componentDidUnload).toHaveBeenCalledTimes(1);
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
