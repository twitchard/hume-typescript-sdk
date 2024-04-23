/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";
import { PositionInterval } from "./PositionInterval";
import { TimeInterval } from "./TimeInterval";
import { EmotionScore } from "./EmotionScore";
import { SentimentScore } from "./SentimentScore";
import { ToxicityScore } from "./ToxicityScore";

export const LanguagePrediction: core.serialization.ObjectSchema<
    serializers.customModels.LanguagePrediction.Raw,
    Hume.customModels.LanguagePrediction
> = core.serialization.object({
    text: core.serialization.string(),
    position: PositionInterval,
    time: TimeInterval.optional(),
    confidence: core.serialization.number().optional(),
    speakerConfidence: core.serialization.property("speaker_confidence", core.serialization.number().optional()),
    emotions: core.serialization.list(EmotionScore),
    sentiment: core.serialization.list(SentimentScore).optional(),
    toxicity: core.serialization.list(ToxicityScore).optional(),
});

export declare namespace LanguagePrediction {
    interface Raw {
        text: string;
        position: PositionInterval.Raw;
        time?: TimeInterval.Raw | null;
        confidence?: number | null;
        speaker_confidence?: number | null;
        emotions: EmotionScore.Raw[];
        sentiment?: SentimentScore.Raw[] | null;
        toxicity?: ToxicityScore.Raw[] | null;
    }
}