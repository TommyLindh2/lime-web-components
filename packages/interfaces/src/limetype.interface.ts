import {
    LimeType,
    LimeProperty,
    PropertyType as BasePropertyType,
    Acl as BaseAcl,
    isRelation as baseIsRelation,
    isSingleRelation as baseIsSingleRelation,
    isDate as baseIsDate,
    isString as baseIsString,
    isFloat as baseIsFloat,
} from '../../lime-web-components/src';

/**
 * @deprecated has been renamed to better align with the Python class from
 * `lime-core`. Use `LimeType` from `@limetech/lime-web-components` instead.
 */
export interface Limetype extends Partial<LimeType> {
    [key: string]: any;
}

/**
 * @deprecated use `Record<string, LimeType> instead`
 */
export interface Limetypes {
    [name: string]: Limetype;
}

/**
 * @deprecated has been renamed to better align with the Python class from
 * `lime-core`. Use `LimeProperty` from `@limetech/lime-web-components` instead.
 */
export interface Property extends LimeProperty {}

/**
 * @deprecated use `Record<string, LimeProperty> instead`
 */
export interface Properties {
    [name: string]: Property;
}

/**
 * @deprecated use type with same name from `@limetech/lime-web-components` instead
 */
export type PropertyType = BasePropertyType;

/**
 * @deprecated use interface with same name from `@limetech/lime-web-components` instead
 */
export interface Acl extends BaseAcl {}

/**
 * @deprecated use function with same name from `@limetech/lime-web-components` instead
 */
export const isRelation = baseIsRelation;

/**
 * @deprecated use function with same name from `@limetech/lime-web-components` instead
 */
export const isSingleRelation = baseIsSingleRelation;

/**
 * @deprecated use function with same name from `@limetech/lime-web-components` instead
 */
export const isDate = baseIsDate;

/**
 * @deprecated use function with same name from `@limetech/lime-web-components` instead
 */
export const isString = baseIsString;

/**
 * @deprecated use function with same name from `@limetech/lime-web-components` instead
 */
export const isFloat = baseIsFloat;
