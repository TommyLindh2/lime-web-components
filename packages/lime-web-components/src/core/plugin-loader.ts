import { LimeWebComponent } from './lime-web-component';

/**
 * Interface for the loader component that is loaded when the app starts
 */
export interface LimePluginLoader extends LimeWebComponent {
    /**
     * This method will be invoked every time the component is inserted into
     * the DOM. For a plugin loader component, it should happen only once. The
     * method must be present on the component for technical reasons.
     *
     * @note this method will be required on the interface in the next breaking
     * release
     */
    connectedCallback?(): void | Promise<any>;

    /**
     * Do any initializations required for the plugin in this method
     */
    componentWillLoad(): void | Promise<any>;

    /**
     * This method will never be called since the component will never
     * be updated. It must still be present on the component though.
     */
    componentWillUpdate(): void | Promise<any>;

    /**
     * This method will be invoked every time the component is removed from
     * the DOM. For a plugin loader component, it should never happen since
     * the component will live during the whole lifespan of the application.
     * The method must be present on the component for technical reasons.
     *
     * @note this method will be required on the interface in the next breaking
     * release
     */
    disconnectedCallback?(): void | Promise<any>;
}
