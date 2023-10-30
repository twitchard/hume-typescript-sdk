/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const ModelsSuccessLanguage: core.serialization.ObjectSchema<
    serializers.ModelsSuccessLanguage.Raw,
    Hume.ModelsSuccessLanguage
> = core.serialization.object({
    predictions: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).ModelsSuccessLanguagePredictionsItem))
        .optional(),
});

export declare namespace ModelsSuccessLanguage {
    interface Raw {
        predictions?: serializers.ModelsSuccessLanguagePredictionsItem.Raw[] | null;
    }
}