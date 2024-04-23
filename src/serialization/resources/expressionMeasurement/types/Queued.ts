/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const Queued: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.Queued.Raw,
    Hume.expressionMeasurement.Queued
> = core.serialization.object({
    createdTimestampMs: core.serialization.property("created_timestamp_ms", core.serialization.number()),
});

export declare namespace Queued {
    interface Raw {
        created_timestamp_ms: number;
    }
}
