/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const TimeRange: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.TimeRange.Raw,
    Hume.expressionMeasurement.TimeRange
> = core.serialization.object({
    begin: core.serialization.number().optional(),
    end: core.serialization.number().optional(),
});

export declare namespace TimeRange {
    interface Raw {
        begin?: number | null;
        end?: number | null;
    }
}