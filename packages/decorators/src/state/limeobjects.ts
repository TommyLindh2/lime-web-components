import {
    ContextAwareStateOptions,
    PlatformServiceName,
    StateOptions,
    LimeWebComponent,
} from '../../../interfaces/src';
import { createStateDecorator, StateDecoratorConfig } from '../factory';

/**
 * Interface for LimeobjectsOptions for the state selector
 */
export interface LimeobjectsOptions extends StateOptions {
    /**
     * Limetype of the object
     */
    limetype?: string;

    /**
     * A function to get the limetype
     */
    getLimetype?: (component: LimeWebComponent) => string;

    /**
     * Id of the limeobject
     */
    id?: number;
}

/**
 * Get a list of limeobjects
 *
 * @param {LimeobjectsOptions} [options] state decorator options
 *
 * @returns {Function} state decorator
 */
export function Limeobjects(options: LimeobjectsOptions = {}) {
    const config: StateDecoratorConfig = {
        name: PlatformServiceName.LimeobjectsState,
        optionFactory: createOptions,
    };

    return createStateDecorator(options, config);
}

/**
 * Get the limeobject for the current context
 *
 * @param {StateOptions} [options] state decorator options
 *
 * @returns {Function} state decorator
 */
export function CurrentLimeobject(options: ContextAwareStateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: PlatformServiceName.LimeobjectsState,
    };
    options.map = [currentLimeobject, ...(options.map || [])];
    options.context = null;

    return createStateDecorator(options, config);
}

function currentLimeobject(limeobjects: Record<string, Array<{ id: string }>>) {
    const { limetype, id } = this.context;

    if (!limeobjects[limetype]) {
        return undefined;
    }

    return limeobjects[limetype].find((object) => object.id === id);
}

function createOptions(
    options: LimeobjectsOptions,
    component: LimeWebComponent
): StateOptions {
    if (options.getLimetype) {
        options.limetype = options.getLimetype(component);
    }

    return options;
}
