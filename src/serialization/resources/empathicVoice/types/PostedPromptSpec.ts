/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const PostedPromptSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedPromptSpec.Raw,
    Hume.empathicVoice.PostedPromptSpec
> = core.serialization.object({
    id: core.serialization.string().optional(),
    version: core.serialization.number().optional(),
});

export declare namespace PostedPromptSpec {
    interface Raw {
        id?: string | null;
        version?: number | null;
    }
}
