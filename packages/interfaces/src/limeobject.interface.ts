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
     * Get related data of the object
     *
     * @param {Property} property the property of the related object
     * @deprecated use `getValue` instead
     */
    getRelation(property: Property): LimeObject;

    /**
     * Get the value of a property by name
     *
     * @param {string} name name of property to get the value of. Allows a path
     * to be specified using dot notation to get the value of a related
     * property
     *
     * @returns {any} the value of the specified property. If it is a relation,
     * the related `LimeObject` will be returned
     */
    getValue?(name: string): any;

    /**
     * Get the limetype of the object
     *
     * @returns {Limetype} the limetype
     */
    getLimetype(): Limetype;

    /**
     * Dynamic properties of the limeobject
     */
    [property: string]: any;
}
