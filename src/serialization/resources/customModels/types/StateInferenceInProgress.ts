/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";
import { InProgress } from "./InProgress";

export const StateInferenceInProgress: core.serialization.ObjectSchema<
    serializers.customModels.StateInferenceInProgress.Raw,
    Hume.customModels.StateInferenceInProgress
> = core.serialization.object({}).extend(InProgress);

export declare namespace StateInferenceInProgress {
    interface Raw extends InProgress.Raw {}
}
