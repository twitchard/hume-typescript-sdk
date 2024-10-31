/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../../index";

/**
 * @example
 *     {
 *         versionDescription: "This is an updated version of the Weather Assistant Config.",
 *         eviVersion: "2",
 *         prompt: {
 *             id: "af699d45-2985-42cc-91b9-af9e5da3bac5",
 *             version: 0
 *         },
 *         voice: {
 *             provider: Hume.empathicVoice.PostedVoiceProvider.HumeAi,
 *             name: "ITO"
 *         },
 *         languageModel: {
 *             modelProvider: Hume.empathicVoice.PostedLanguageModelModelProvider.Anthropic,
 *             modelResource: Hume.empathicVoice.PostedLanguageModelModelResource.Claude35Sonnet20240620,
 *             temperature: 1
 *         },
 *         ellmModel: {
 *             allowShortResponses: true
 *         },
 *         eventMessages: {
 *             onNewChat: {
 *                 enabled: false,
 *                 text: ""
 *             },
 *             onInactivityTimeout: {
 *                 enabled: false,
 *                 text: ""
 *             },
 *             onMaxDurationTimeout: {
 *                 enabled: false,
 *                 text: ""
 *             }
 *         }
 *     }
 */
export interface PostedConfigVersion {
    /** The version of the EVI used with this config. */
    eviVersion: string;
    /** An optional description of the Config version. */
    versionDescription?: string;
    prompt?: Hume.empathicVoice.PostedConfigPromptSpec;
    /** A voice specification associated with this Config version. */
    voice?: Hume.empathicVoice.PostedVoice;
    /**
     * The supplemental language model associated with this Config version.
     *
     * This model is used to generate longer, more detailed responses from EVI. Choosing an appropriate supplemental language model for your use case is crucial for generating fast, high-quality responses from EVI.
     */
    languageModel?: Hume.empathicVoice.PostedLanguageModel;
    /**
     * The eLLM setup associated with this Config version.
     *
     * Hume's eLLM (empathic Large Language Model) is a multimodal language model that takes into account both expression measures and language. The eLLM generates short, empathic language responses and guides text-to-speech (TTS) prosody.
     */
    ellmModel?: Hume.empathicVoice.PostedEllmModel;
    /** List of user-defined tools associated with this Config version. */
    tools?: (Hume.empathicVoice.PostedUserDefinedToolSpec | undefined)[];
    /** List of built-in tools associated with this Config version. */
    builtinTools?: (Hume.empathicVoice.PostedBuiltinTool | undefined)[];
    eventMessages?: Hume.empathicVoice.PostedEventMessageSpecs;
    timeouts?: Hume.empathicVoice.PostedTimeoutSpecs;
}
