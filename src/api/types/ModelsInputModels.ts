/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "..";

/**
 * Configuration used to specify which models should be used and with what settings.
 *
 */
export interface ModelsInputModels {
    /**
     * Configuration for the vocal burst emotion model.
     *
     * Note: Model configuration is not currently available in streaming.
     *
     * Please use the default configuration by passing an empty object `{}`.
     *
     */
    burst?: Record<string, unknown>;
    /**
     * Configuration for the facial expression emotion model.
     *
     * Note: Using the `reset_stream` parameter does not have any effect on face identification. A single face identifier cache is maintained over a full session whether `reset_stream` is used or not.
     *
     */
    face?: Hume.ModelsInputModelsFace;
    /**
     * Configuration for the facemesh emotion model.
     *
     * Note: Model configuration is not currently available in streaming.
     *
     * Please use the default configuration by passing an empty object `{}`.
     *
     */
    facemesh?: Record<string, unknown>;
    /** Configuration for the language emotion model. */
    language?: Hume.ModelsInputModelsLanguage;
    /**
     * Configuration for the speech prosody emotion model.
     *
     * Note: Model configuration is not currently available in streaming.
     *
     * Please use the default configuration by passing an empty object `{}`.
     *
     */
    prosody?: Record<string, unknown>;
}