import { PlatformServiceName, StateOptions } from '../../../interfaces/src';
import { createStateDecorator, StateDecoratorConfig } from '../factory';

/**
 * ConfigsOptions
 */
export interface ConfigsOptions extends StateOptions {
    name?: string;
}

/**
 * Gets an object with all configs where key is used as key.
 *
 * @param {ConfigsOptions} options state decorator options
 *
 * @returns {Function} state decorator
 */
export function Configs(options: ConfigsOptions) {
    const config: StateDecoratorConfig = {
        name: PlatformServiceName.ConfigsState,
    };

    return createStateDecorator(options, config);
}
