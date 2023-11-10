/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const Transcription: core.serialization.ObjectSchema<serializers.Transcription.Raw, Hume.Transcription> =
    core.serialization.object({
        language: core.serialization.lazy(async () => (await import("..")).Bcp47Tag).optional(),
    });

export declare namespace Transcription {
    interface Raw {
        language?: serializers.Bcp47Tag.Raw | null;
    }
}
