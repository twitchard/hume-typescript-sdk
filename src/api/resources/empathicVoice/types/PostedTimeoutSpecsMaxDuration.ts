/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Specifies the maximum allowed duration (in seconds) for an EVI WebSocket connection before it is automatically disconnected. Default is 1,800 seconds (30 minutes).
 *
 * Accepts a minimum value of 1 second and a maximum value of 1,800 seconds.
 */
export interface PostedTimeoutSpecsMaxDuration {
  /**
   * Boolean indicating if this timeout is enabled.
   *
   * If set to `false`, EVI will not timeout due to a specified maximum duration being reached. However, the conversation will eventually disconnect after 1,800 seconds (30 minutes), which is the maximum WebSocket duration limit for EVI.
   */
  enabled: boolean;
  /** Duration in seconds for the timeout (e.g. 600 seconds represents 10 minutes). */
  durationSecs?: number;
}
