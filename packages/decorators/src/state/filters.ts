import { PlatformServiceName, StateOptions } from '../../../interfaces/src';
import { createStateDecorator, StateDecoratorConfig } from '../factory';

/**
 * FiltersOptions
 */
export interface FiltersOptions extends StateOptions {
    id?: string;
    limetype?: string;
}

/**
 * Gets a list of filters
 *
 * @param {StateOptions} [options] state decorator options
 *
 * @returns {Function} state decorator
 */
export function Filters(options: FiltersOptions = {}) {
    const config: StateDecoratorConfig = {
        name: PlatformServiceName.FiltersState,
    };

    return createStateDecorator(options, config);
}
