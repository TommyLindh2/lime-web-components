import {
    LimeWebComponentContext,
    LimeWebComponentPlatform,
} from '@limetech/lime-web-components-interfaces';

/**
 * A platform suitable for testing
 */
class TestingPlatform implements LimeWebComponentPlatform {
    public type: 'LimeCRMWebClient';

    private services = {};

    public get(name: string) {
        if (!(name in this.services)) {
            this.register(name, createDefaultService());
        }

        return this.services[name];
    }

    public has(name: string) {
        return true;
    }

    public register(name: string, service: any) {
        this.services[name] = createServiceProxy(service);
    }
}

/**
 * Create a new platform suitable for testing
 *
 * @returns {LimeWebComponentPlatform} a new testing platform
 */
export function createPlatform(): LimeWebComponentPlatform {
    return new TestingPlatform();
}

export const defaultContext: LimeWebComponentContext = {
    limetype: null,
    id: null,
};

/**
 * Create a proxy for a service
 *
 * Each method that is not implemented in the service will default to return
 * the arguments it was called with
 *
 * @param {any} service the service to proxy
 *
 * @returns {Proxy} a proxy for the service
 */
function createServiceProxy(service: any) {
    const handler = {
        get: (target: any, prop: string, receiver: any) => {
            let value = Reflect.get(target, prop, receiver);
            if (value) {
                if (typeof value === 'function') {
                    value = value.bind(target);
                }

                return value;
            }

            return (...args: any[]) => {
                return args;
            };
        },
    };

    return new Proxy(service, handler);
}

function createDefaultService() {
    return {};
}
