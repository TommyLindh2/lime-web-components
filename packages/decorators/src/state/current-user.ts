import { PlatformServiceName, StateOptions } from '../../../interfaces/src';
import { createStateDecorator, StateDecoratorConfig } from '../factory';

/**
 * Get the currently logged in user
 *
 * @param {StateOptions} [options] state decorator options
 *
 * @returns {Function} state decorator
 */
export function CurrentUser(options: StateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: PlatformServiceName.ApplicationState,
    };
    options.map = [getCurrentUser, ...(options.map || [])];

    return createStateDecorator(options, config);
}

function getCurrentUser(applicationData: any) {
    return applicationData.currentUser;
}
