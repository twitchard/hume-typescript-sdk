/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         pageNumber: 0,
 *         pageSize: 2
 *     }
 */
export interface ToolsListToolsRequest {
  /**
   * The page number of the results to return.
   */
  pageNumber?: number;
  /**
   * The maximum number of results to include per page.
   */
  pageSize?: number;
  /**
   * Only include the most recent version of each tool in the list.
   */
  restrictToMostRecent?: boolean;
  /**
   * Filter to only include tools with this name.
   */
  name?: string;
}
