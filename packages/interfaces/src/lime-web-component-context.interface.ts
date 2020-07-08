/**
 * Interface for the context in which the Lime Web Component appears
 */
export interface LimeWebComponentContext {
    /**
     * The name of the limetype of the context
     */
    limetype: string | null;

    /**
     * The id of the limeobject of the context
     */
    id: number | null;
}
