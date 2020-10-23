import { Limetype, Property } from './limetype.interface';

/**
 * Interface for the Lime object
 */
export interface LimeObject {
    /**
     * Id of the limeobject
     */
    id: number;

    /**
     * The created time of the limeobject
     */
    createdtime: string;

    /**
     * The last time the limeobject updated
     */
    timestamp: string;

    /**
     * Descriptive of the limeobject
     */
    descriptive: string;

    /**
     * A function to get related data
     *
     * @param {Property} property the property of the related object
     */
    getRelation(property: Property): LimeObject;

    /**
     * A function to get the limetype of the related object
     */
    getLimetype(): Limetype;

    /**
     * Dynamic properties of the limeobject
     */
    [property: string]: any;
}
