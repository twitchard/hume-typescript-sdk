/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../index';
import * as Hume from '../../../../api/index';
import * as core from '../../../../core';
import { StateInferenceQueued } from './StateInferenceQueued';
import { StateInferenceInProgress } from './StateInferenceInProgress';
import { StateInferenceCompletedInference } from './StateInferenceCompletedInference';
import { StateInferenceFailed } from './StateInferenceFailed';

export const StateInference: core.serialization.Schema<
  serializers.expressionMeasurement.StateInference.Raw,
  Hume.expressionMeasurement.StateInference
> = core.serialization
  .union('status', {
    QUEUED: StateInferenceQueued,
    IN_PROGRESS: StateInferenceInProgress,
    COMPLETED: StateInferenceCompletedInference,
    FAILED: StateInferenceFailed,
  })
  .transform<Hume.expressionMeasurement.StateInference>({
    transform: (value) => value,
    untransform: (value) => value,
  });

export declare namespace StateInference {
  type Raw =
    | StateInference.Queued
    | StateInference.InProgress
    | StateInference.Completed
    | StateInference.Failed;

  interface Queued extends StateInferenceQueued.Raw {
    status: 'QUEUED';
  }

  interface InProgress extends StateInferenceInProgress.Raw {
    status: 'IN_PROGRESS';
  }

  interface Completed extends StateInferenceCompletedInference.Raw {
    status: 'COMPLETED';
  }

  interface Failed extends StateInferenceFailed.Raw {
    status: 'FAILED';
  }
}
