/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../..";

export interface ReturnDataset {
    /** Hume-generated Dataset ID */
    id?: string;
    /** Dataset name */
    name: string;
    latestVersion?: Hume.customModels.DatasetVersion;
    /** Updated date and time */
    modifiedOn?: number;
    /** Additional details as key, value pairs */
    metadata?: Record<string, Record<string, unknown>>;
}