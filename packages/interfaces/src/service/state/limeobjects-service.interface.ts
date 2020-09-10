import { Expression } from '../../query.interface';
import { StateService } from '../state-service.interface';

export interface LimeobjectsStateService extends StateService {
    /**
     * Load the specified limeobject into the state
     *
     * @param {string} limetype
     * @param {number} id
     */
    loadObject(limetype: string, id: number): void;

    /**
     * Load related objects into the state
     *
     * @param {string} limetype name of the limetype of the owning limeobject
     * @param {number} id the id of the owning limeobject
     * @param {string} property name of the property that contain the relations
     * @param {LoadOptions} options options about the objects to load
     *
     * @returns {ObjectResponse} list of related objects together with total count of objects
     */
    loadRelations(
        limetype: string,
        id: number,
        property: string,
        options?: LoadOptions
    ): Promise<ObjectResponse>;

    /**
     * Reload the specified limeobject and update corresponding views in the webclient
     *
     * NOTE: This is just a temporary method that can be used to get around some quirks in the current version of the
     * webclient. It is deprecated and code should not rely on its existance. Check if the method exists before using
     * it to make code backwards compatible, e.g. `limeobjects.reload && limeobjects.reload('company', 1001)`
     *
     * Once the quirks in the webclient have been fixed, there should be no need for this method and objects should
     * update themselves automatically.
     *
     * @deprecated
     */
    reloadObject?(limetype: string, id: number): void;
}

export interface LoadOptions {
    /**
     * Maximum number of objects to load
     */
    limit?: number;

    /**
     * Offset of the objects to load
     */
    offset?: number;

    /**
     * Filter to apply to the objects
     */
    filter?: Expression;

    /**
     * Order to sort the properties by
     */
    order?: PropertyOrder[];
}

export interface PropertyOrder {
    /**
     * Name of the property to sort on
     */
    name: string;

    /**
     * The direction to order the property by
     */
    direction: 'ASC' | 'DESC';
}

export interface ObjectResponse {
    /**
     * The objects that matched the query
     */
    objects: object[];

    /**
     * Total number of objects that exist matching the query
     */
    totalCount: number;

    /**
     * Aggregated data
     */
    aggregates?: AggregationGroups;
}

export interface AggregationGroups {
    /**
     * Name of the aggregation group along with a list of aggregations
     */
    [name: string]: ObjectAggregation[];
}

export interface ObjectAggregation {
    /**
     * Name of the property being aggregated along with its aggregated value
     */
    [property: string]: number | string;
}
