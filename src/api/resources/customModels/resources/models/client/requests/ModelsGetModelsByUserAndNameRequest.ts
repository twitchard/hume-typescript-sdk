/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface ModelsGetModelsByUserAndNameRequest {
    /**
     * Model name to be queried
     */
    name?: string;
    /**
     * Index of the first result
     */
    pageNumber?: number;
    /**
     * Maximum number of results
     */
    pageSize?: number;
    /**
     * `True` Will show all assets owned by you and shared with you. `False` Will show only your assets. Default: `False`
     */
    sharedAssets?: boolean;
}
