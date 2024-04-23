/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";
import { Target } from "./Target";

export const ValidationArgs: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.ValidationArgs.Raw,
    Hume.expressionMeasurement.ValidationArgs
> = core.serialization.object({
    positiveLabel: core.serialization.property("positive_label", Target.optional()),
});

export declare namespace ValidationArgs {
    interface Raw {
        positive_label?: Target.Raw | null;
    }
}
