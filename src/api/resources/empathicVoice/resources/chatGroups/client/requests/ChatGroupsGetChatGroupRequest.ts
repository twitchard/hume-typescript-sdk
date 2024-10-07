/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         pageNumber: 0,
 *         pageSize: 1,
 *         ascendingOrder: true
 *     }
 */
export interface ChatGroupsGetChatGroupRequest {
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the sorting order of the results based on their creation date. Set to true for ascending order (chronological, with the oldest records first) and false for descending order (reverse-chronological, with the newest records first). Defaults to true.
     */
    ascendingOrder?: boolean;
}