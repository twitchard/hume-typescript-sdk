/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const ProsodyPrediction: core.serialization.ObjectSchema<
    serializers.ProsodyPrediction.Raw,
    Hume.ProsodyPrediction
> = core.serialization.object({
    text: core.serialization.string().optional(),
    time: core.serialization.lazyObject(async () => (await import("..")).TimeInterval),
    confidence: core.serialization.number().optional(),
    speakerConfidence: core.serialization.property("speaker_confidence", core.serialization.number().optional()),
    emotions: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).EmotionScore)),
});

export declare namespace ProsodyPrediction {
    interface Raw {
        text?: string | null;
        time: serializers.TimeInterval.Raw;
        confidence?: number | null;
        speaker_confidence?: number | null;
        emotions: serializers.EmotionScore.Raw[];
    }
}
