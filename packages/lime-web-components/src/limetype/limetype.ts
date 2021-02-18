import { Acl } from './acl';
import { LimeProperty } from './property';

export interface LimeType {
    name: string;
    label: string;
    acl: Acl;
    localname: {
        singular: string;
        plural: string;
    };
    properties: Record<string, LimeProperty>;

    /**
     * Get a property by name
     *
     * @param {string} name name of property to get. Allows a path to be
     * specified using dot notation to get properties of relations
     *
     * @throws Will throw an error containing the name of the missing property
     * @returns {LimeProperty} the property specified by the name argument
     *
     * @example
     * const phoneProperty = dealLimetype.getProperty('company.phone')
     */
    getProperty(name: string): LimeProperty;
}
