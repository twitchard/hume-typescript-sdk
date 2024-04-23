/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../..";

/**
 * Latest Model version number
 */
export interface ExternalModelVersion {
    /** Hume-generated Model version ID */
    id: string;
    /** Hume-generated Model ID of the parent Model */
    modelId: string;
    /** Hume-generated User ID */
    userId: string;
    /** Model version number */
    version: string;
    /** Model version's source file URI */
    sourceUri: string;
    /** Hume-generated Dataset version ID for the Dataset version the Model version was trained on */
    datasetVersionId: string;
    /** Created date and time */
    createdOn: number;
    /** Additional details as key, value pairs */
    metadata?: Record<string, Record<string, unknown>>;
    /** Model version description */
    description?: string;
    /** List of Tags associated with the Model version */
    tags?: Hume.customModels.ExternalModelVersionTag[];
    /** File type: video, audio, video_no_audio, image, text, or mediapipe_facemesh */
    fileType?: Hume.customModels.ExternalModelVersionFileType;
    /** Target feature, the feature the model was trained against */
    targetFeature?: string;
    /** Type of the task used to train */
    taskType?: string;
    /** ID of the batch training job */
    trainingJobId?: string;
}