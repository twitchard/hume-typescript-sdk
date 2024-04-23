/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";
import { JobTraining } from "./JobTraining";

export const UnionJobJobTraining: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.UnionJobJobTraining.Raw,
    Hume.expressionMeasurement.UnionJobJobTraining
> = core.serialization.object({}).extend(JobTraining);

export declare namespace UnionJobJobTraining {
    interface Raw extends JobTraining.Raw {}
}