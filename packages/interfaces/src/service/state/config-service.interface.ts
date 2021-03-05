import { StateService } from '../state-service.interface';

export interface ConfigStateService extends StateService {
    /**
     * Check if a config exists
     *
     * @param key name of the key containing the config
     *
     * @returns true if config exists
     */
    has(key: string): boolean;

    /**
     * Get config from the state
     *
     * @param key name of the key containing the config
     *
     * @returns the config
     */
    get<T = any>(key: string): T;
}
