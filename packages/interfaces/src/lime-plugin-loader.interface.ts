import { LimePluginLoader as Base } from '../../lime-web-components/src';

/**
 * @inheritdoc
 *
 * @deprecated use interface with same name from `@limetech/lime-web-components` instead
 */
export interface LimePluginLoader extends Base {
    /**
     * This method will never be called since the component will live
     * during the whole lifespan of the application.
     *
     * @deprecated this method has been deprecated and consumers should
     * use `disconnectedCallback` instead
     */
    componentDidUnload?(): void | Promise<any>;
}
