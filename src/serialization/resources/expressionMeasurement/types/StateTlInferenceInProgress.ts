/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";
import { InProgress } from "./InProgress";

export const StateTlInferenceInProgress: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.StateTlInferenceInProgress.Raw,
    Hume.expressionMeasurement.StateTlInferenceInProgress
> = core.serialization.object({}).extend(InProgress);

export declare namespace StateTlInferenceInProgress {
    interface Raw extends InProgress.Raw {}
}