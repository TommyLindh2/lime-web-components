import { LimeWebComponentPlatform as Base } from '../../lime-web-components/src';

/**
 * @inheritdoc
 *
 * @deprecated use interface with same name from `@limetech/lime-web-components` instead
 */
export interface LimeWebComponentPlatform extends Base {}

/**
 * Core platform service names
 *
 * @deprecated use enum with same name from `@limetech/lime-web-components` instead
 */
// eslint-disable-next-line no-shadow
export enum PlatformServiceName {
    Translate = 'translate',
    Http = 'http',
    Route = 'route',
    Notification = 'notifications',
    Query = 'query',
    CommandBus = 'commandBus',
    Dialog = 'dialog',
    EventDispatcher = 'eventDispatcher',

    LimetypesState = 'state.limetypes',
    LimeobjectsState = 'state.limeobjects',
    ApplicationState = 'state.application',
    ConfigsState = 'state.configs',
    FiltersState = 'state.filters',
    DeviceState = 'state.device',
    TaskState = 'state.tasks',
}
