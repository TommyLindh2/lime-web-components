export interface Limetype {
    name: string;
    label: string;
    acl: Acl;
    localname: {
        singular: string;
        plural: string;
    };
    properties: Properties;

    /**
     * Get a property by name
     *
     * @param {string} name name of property to get. Allows a path to be
     * specified using dot notation to get properties of relations
     *
     * @throws Will throw an error containing the name of the missing property
     * @returns {Property} the property specified by the name argument
     *
     * @example
     * const phoneProperty = dealLimetype.getProperty('company.phone')
     */
    getProperty?(name: string): Property;

    [key: string]: any;
}

export interface Limetypes {
    [name: string]: Limetype;
}

export interface Property {
    acl: Acl;
    defaultvalue: any;
    fieldorder: number;
    has_sql?: boolean; // eslint-disable-line camelcase
    label: string;
    length?: number;
    localname: string;
    name: string;
    required: boolean;
    type: PropertyType;
    options?: PropertyOption[];
    relation?: {
        getLimetype: () => Limetype;
        getBackreference: () => Property;
    };
}

export interface PropertyOption {
    key: string;
    inactive: boolean;
    text: string;
    order?: number;
    id?: number;
}

export interface Properties {
    [name: string]: Property;
}

export type PropertyType =
    | 'string'
    | 'text'
    | 'phone'
    | 'integer'
    | 'decimal'
    | 'percent'
    | 'time'
    | 'date'
    | 'year'
    | 'quarter'
    | 'month'
    | 'yesno'
    | 'link'
    | 'user'
    | 'xml'
    | 'option'
    | 'set'
    | 'file'
    | 'hasone'
    | 'hasmany'
    | 'belongsto'
    | 'hasandbelongstomany'
    | 'system';

export interface Acl {
    delete: boolean;
    read: boolean;
    update: boolean;
    create: boolean;
}

export function isRelation(property: Property) {
    const propTypes: PropertyType[] = [
        'belongsto',
        'hasone',
        'hasmany',
        'hasandbelongstomany',
    ];

    return property && propTypes.includes(property.type);
}

export function isSingleRelation(property: Property) {
    const propTypes: PropertyType[] = ['belongsto', 'hasone'];

    return property && propTypes.includes(property.type);
}

export function isDate(property: Property) {
    const propTypes: PropertyType[] = [
        'time',
        'date',
        'year',
        'quarter',
        'month',
    ];

    return property && propTypes.includes(property.type);
}

export function isString(property: Property) {
    const propTypes: PropertyType[] = ['string', 'text', 'phone', 'link'];

    return property && propTypes.includes(property.type);
}

export function isFloat(property: Property) {
    const propTypes: PropertyType[] = ['decimal', 'percent'];

    return property && propTypes.includes(property.type);
}
