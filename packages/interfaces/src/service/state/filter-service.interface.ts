import { Filter } from '../../query.interface';
import { StateService } from '../state-service.interface';

export interface FilterService extends StateService {
    /**
     * Saves the new filter to the database
     *
     * @param filter a filter to save
     *
     * @returns {Promise<void>} a promise that will be resolved when the filter is saved
     */
    save(filter: Filter): Promise<void>;

    /**
     * Updates the existing filter
     *
     * @param filter a filter to update
     *
     * @returns {Promise<void>} a promise that will be resolved when the filter is updated
     */
    update(filter: Filter): Promise<void>;
}
