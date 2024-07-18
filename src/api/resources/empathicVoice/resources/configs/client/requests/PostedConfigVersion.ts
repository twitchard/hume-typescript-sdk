/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from '../../../../../../index';

/**
 * @example
 *     {}
 */
export interface PostedConfigVersion {
  /** Description that is appended to a specific version of a Config. */
  versionDescription?: string;
  prompt?: Hume.empathicVoice.PostedPromptSpec;
  voice?: Hume.empathicVoice.PostedVoice;
  languageModel?: Hume.empathicVoice.PostedLanguageModel;
  ellmModel?: Hume.empathicVoice.PostedEllmModel;
  /** Tool specification for a Config. */
  tools?: (Hume.empathicVoice.PostedUserDefinedToolSpec | undefined)[];
  /** Built-in tool specification for a Config. */
  builtinTools?: (Hume.empathicVoice.PostedBuiltinTool | undefined)[];
  eventMessages?: Hume.empathicVoice.PostedEventMessageSpecs;
  timeouts?: Hume.empathicVoice.PostedTimeoutSpecs;
}
