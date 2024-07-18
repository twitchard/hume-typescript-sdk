/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface ConfigsListConfigsRequest {
  /**
   * The page number of the results to return.
   */
  pageNumber?: number;
  /**
   * The maximum number of results to include per page.
   */
  pageSize?: number;
  /**
   * Only include the most recent version of each config in the list.
   */
  restrictToMostRecent?: boolean;
  /**
   * Filter to only include configs with this name.
   */
  name?: string;
}
