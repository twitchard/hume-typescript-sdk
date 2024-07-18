/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../index';
import * as Hume from '../../../../api/index';
import * as core from '../../../../core';

export const Target: core.serialization.Schema<
  serializers.expressionMeasurement.Target.Raw,
  Hume.expressionMeasurement.Target
> = core.serialization.undiscriminatedUnion([
  core.serialization.number(),
  core.serialization.number(),
  core.serialization.string(),
]);

export declare namespace Target {
  type Raw = number | number | string;
}
