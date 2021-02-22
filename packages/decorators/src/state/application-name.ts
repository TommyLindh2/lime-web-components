import { PlatformServiceName, StateOptions } from '../../../interfaces/src';
import { createStateDecorator, StateDecoratorConfig } from '../factory';

/**
 * Get the name of the application
 *
 * @param {StateOptions} [options] options for the state selector
 *
 * @returns {Function} state decorator
 */
export function ApplicationName(options: StateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: PlatformServiceName.ApplicationState,
    };
    options.map = [getApplicationName, ...(options.map || [])];

    return createStateDecorator(options, config);
}

function getApplicationName(applicationData: any) {
    return applicationData.applicationName;
}
