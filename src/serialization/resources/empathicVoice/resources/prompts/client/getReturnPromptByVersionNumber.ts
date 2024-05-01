/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Hume from "../../../../../../api";
import * as core from "../../../../../../core";
import { ReturnPrompt } from "../../../types/ReturnPrompt";

export const Response: core.serialization.Schema<
    serializers.empathicVoice.prompts.getReturnPromptByVersionNumber.Response.Raw,
    Hume.empathicVoice.ReturnPrompt | undefined
> = ReturnPrompt.optional();

export declare namespace Response {
    type Raw = ReturnPrompt.Raw | null | undefined;
}