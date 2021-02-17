import { LimeWebComponentContext } from './context';
import { LimeWebComponentPlatform } from './platform';

/**
 * Interface that Lime Web Components must implement
 */
export interface LimeWebComponent {
    /**
     * Reference to the platform
     */
    platform: LimeWebComponentPlatform;

    /**
     * The context this component belongs to
     */
    context: LimeWebComponentContext;
}
