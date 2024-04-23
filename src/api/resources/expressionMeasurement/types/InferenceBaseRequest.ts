/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../..";

export interface InferenceBaseRequest {
    models?: Hume.expressionMeasurement.Models;
    transcription?: Hume.expressionMeasurement.Transcription;
    /**
     * URLs to the media files to be processed. Each must be a valid public URL to a media file (see recommended input filetypes) or an archive (`.zip`, `.tar.gz`, `.tar.bz2`, `.tar.xz`) of media files.
     *
     * If you wish to supply more than 100 URLs, consider providing them as an archive (`.zip`, `.tar.gz`, `.tar.bz2`, `.tar.xz`).
     */
    urls?: string[];
    /** List of File IDs corresponding to the files in the asset registry. */
    registryFiles?: string[];
    /** Text to supply directly to our language and NER models. */
    text?: string[];
    /** If provided, a `POST` request will be made to the URL with the generated predictions on completion or the error message on failure. */
    callbackUrl?: string;
    /** Whether to send an email notification to the user upon job completion/failure. */
    notify?: boolean;
}
