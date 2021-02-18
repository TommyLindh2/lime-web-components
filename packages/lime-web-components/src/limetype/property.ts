import { Acl } from './acl';
import { LimeType } from './limetype';

export interface LimeProperty {
    acl: Acl;
    defaultvalue: any;
    fieldorder: number;
    has_sql?: boolean; // eslint-disable-line camelcase
    label: string;
    localname: string;
    name: string;
    required: boolean;
    type: PropertyType;
    options?: Array<{
        key: string;
        inactive: boolean;
        text: string;
        order?: number;
        id?: number;
    }>;
    relation?: {
        getLimetype: () => LimeType;
        getBackreference: () => LimeProperty;
    };
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

export function isRelation(property: LimeProperty) {
    const propTypes: PropertyType[] = [
        'belongsto',
        'hasone',
        'hasmany',
        'hasandbelongstomany',
    ];

    return property && propTypes.includes(property.type);
}

export function isSingleRelation(property: LimeProperty) {
    const propTypes: PropertyType[] = ['belongsto', 'hasone'];

    return property && propTypes.includes(property.type);
}

export function isDate(property: LimeProperty) {
    const propTypes: PropertyType[] = [
        'time',
        'date',
        'year',
        'quarter',
        'month',
    ];

    return property && propTypes.includes(property.type);
}

export function isString(property: LimeProperty) {
    const propTypes: PropertyType[] = ['string', 'text', 'phone', 'link'];

    return property && propTypes.includes(property.type);
}

export function isFloat(property: LimeProperty) {
    const propTypes: PropertyType[] = ['decimal', 'percent'];

    return property && propTypes.includes(property.type);
}
