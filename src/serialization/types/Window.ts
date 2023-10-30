/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const Window: core.serialization.ObjectSchema<serializers.Window.Raw, Hume.Window> = core.serialization.object({
    length: core.serialization.number().optional(),
    step: core.serialization.number().optional(),
});

export declare namespace Window {
    interface Raw {
        length?: number | null;
        step?: number | null;
    }
}
