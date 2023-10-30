/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const ModelsSuccessLanguagePredictionsItem: core.serialization.ObjectSchema<
    serializers.ModelsSuccessLanguagePredictionsItem.Raw,
    Hume.ModelsSuccessLanguagePredictionsItem
> = core.serialization.object({
    text: core.serialization.string().optional(),
    position: core.serialization.lazyObject(async () => (await import("..")).TextPosition).optional(),
    emotions: core.serialization.lazy(async () => (await import("..")).EmotionEmbedding).optional(),
    sentiment: core.serialization.lazy(async () => (await import("..")).Sentiment).optional(),
    toxicity: core.serialization.lazy(async () => (await import("..")).Toxicity).optional(),
});

export declare namespace ModelsSuccessLanguagePredictionsItem {
    interface Raw {
        text?: string | null;
        position?: serializers.TextPosition.Raw | null;
        emotions?: serializers.EmotionEmbedding.Raw | null;
        sentiment?: serializers.Sentiment.Raw | null;
        toxicity?: serializers.Toxicity.Raw | null;
    }
}
