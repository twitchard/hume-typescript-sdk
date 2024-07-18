/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../index';
import * as Hume from '../../../../api/index';
import * as core from '../../../../core';
import { DatasetId } from './DatasetId';
import { DatasetVersionId } from './DatasetVersionId';

export const Dataset: core.serialization.Schema<
  serializers.expressionMeasurement.Dataset.Raw,
  Hume.expressionMeasurement.Dataset
> = core.serialization.undiscriminatedUnion([DatasetId, DatasetVersionId]);

export declare namespace Dataset {
  type Raw = DatasetId.Raw | DatasetVersionId.Raw;
}
