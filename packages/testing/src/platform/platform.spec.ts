import { LimeWebComponentPlatform } from '@limetech/lime-web-components-interfaces';
import { createPlatform } from '.';

describe('createPlatform', () => {
    let platform: LimeWebComponentPlatform;

    beforeEach(() => {
        platform = createPlatform();
    });

    it('creates a platform', () => {
        expect(platform).toBeTruthy();
    });

    describe('when registering a service', () => {
        class MyService {
            private myData: string;

            constructor() {
                this.myData = 'foo';
            }

            public getData() {
                return this.myData;
            }
        }

        beforeEach(() => {
            platform.register('service', new MyService());
        });

        it('the service works as expected', () => {
            const service: MyService = platform.get('service');

            expect(service.getData()).toEqual('foo');
        });

        it('unknown methods returns the arguments', () => {
            const service: any = platform.get('service');

            expect(service.unknownMethod('bar')).toEqual(['bar']);
        });
    });

    describe('when registering a Map', () => {
        beforeEach(() => {
            const map = new Map();
            platform.register('map', map);
        });

        it('does not throw errors when using the map methods', () => {
            const service: Map<string, any> = platform.get('map');

            expect(() => service.has('foo')).not.toThrow();
        });
    });
});
