/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const When: core.serialization.Schema<
    serializers.expressionMeasurement.When.Raw,
    Hume.expressionMeasurement.When
> = core.serialization.enum_(["created_before", "created_after"]);

export declare namespace When {
    type Raw = "created_before" | "created_after";
}
