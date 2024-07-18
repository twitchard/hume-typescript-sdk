/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from '../../../index';

export interface TrainingBaseRequest {
  customModel: Hume.expressionMeasurement.CustomModelRequest;
  dataset: Hume.expressionMeasurement.Dataset;
  targetFeature?: string;
  task?: Hume.expressionMeasurement.Task;
  evaluation?: Hume.expressionMeasurement.EvaluationArgs;
  alternatives?: Hume.expressionMeasurement.Alternative[];
  callbackUrl?: string;
  notify?: boolean;
}
