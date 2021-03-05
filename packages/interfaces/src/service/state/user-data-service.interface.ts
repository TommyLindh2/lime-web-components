import { StateService } from '../state-service.interface';

/**
 * Handle fetching and saving user specific data, e.g. settings or other state
 * data that should persist between sessions
 *
 * This is an experimental service and is subject to change in the future. The
 * API should not be considered stable
 *
 * @private
 */
export interface UserDataStateService extends StateService {
    /**
     * Check if user data exists
     *
     * @param key name of the key containing the data
     *
     * @returns true if user data exists
     */
    has(key: string): boolean;

    /**
     * Get user data
     *
     * @param key name of the key containing the data
     *
     * @returns the data
     */
    get<T = any>(key: string): T;

    /**
     * Set user data
     *
     * @param key name of the key for the data
     * @param data the data to save, will delete the data if undefined
     */
    set<T = any>(key: string, data?: T): void;
}
