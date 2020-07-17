import {
    ContextAwareStateOptions,
    PlatformServiceName,
    StateOptions,
} from '@limetech/lime-web-components-interfaces';
import { createStateDecorator, StateDecoratorConfig } from '../index';

export interface LimetypesOptions extends StateOptions {
    name?: string;
}

/**
 * Gets an object with all limetypes where name is used as key
 *
 * @param {LimetypesOptions} [options] state decorator options
 *
 * @returns {Function} state decorator
 */
export function Limetypes(options: LimetypesOptions = {}) {
    const config: StateDecoratorConfig = {
        name: PlatformServiceName.LimetypesState,
    };

    return createStateDecorator(options, config);
}

/**
 * Get the limetype for the current context
 *
 * @param {StateOptions} [options] state decorator options
 *
 * @returns {Function} state decorator
 */
export function CurrentLimetype(options: ContextAwareStateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: PlatformServiceName.LimetypesState,
    };
    options.map = [currentLimetype, ...(options.map || [])];
    options.context = null;

    return createStateDecorator(options, config);
}

function currentLimetype(limetypes: any) {
    const { limetype } = this.context;

    return limetypes[limetype];
}
