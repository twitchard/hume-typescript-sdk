/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A specific LanguageModel
 */
export interface ReturnLanguageModel {
    /** The provider of this model. Based on the enum modelProvider. */
    modelProvider?: string;
    /** String that specifies the model to use with modelProvider. */
    modelResource?: string;
    /** Model temperature. */
    temperature?: number;
}
