/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from '../../../../../index';

export interface StreamBurstFacePredictionsItem {
  /** Frame number */
  frame?: number;
  /** Time in seconds when face detection occurred. */
  time?: number;
  bbox?: Hume.expressionMeasurement.BoundingBox;
  /** The predicted probability that a detected face was actually a face. */
  prob?: number;
  /** Identifier for a face. Not that this defaults to `unknown` unless face identification is enabled in the face model configuration. */
  faceId?: string;
  emotions?: Hume.expressionMeasurement.EmotionEmbedding;
  facs?: Hume.expressionMeasurement.EmotionEmbedding;
  descriptions?: Hume.expressionMeasurement.EmotionEmbedding;
}
