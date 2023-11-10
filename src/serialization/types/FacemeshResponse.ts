/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const FacemeshResponse: core.serialization.ObjectSchema<
    serializers.FacemeshResponse.Raw,
    Hume.FacemeshResponse
> = core.serialization.object({
    predictions: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).ModelsSuccessFacemeshPredictionsItem))
        .optional(),
});

export declare namespace FacemeshResponse {
    interface Raw {
        predictions?: serializers.ModelsSuccessFacemeshPredictionsItem.Raw[] | null;
    }
}
