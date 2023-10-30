/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hume from "../../api";
import * as core from "../../core";

export const Source: core.serialization.Schema<serializers.Source.Raw, Hume.Source> = core.serialization
    .union("type", {
        url: core.serialization.lazyObject(async () => (await import("..")).Url),
        file: core.serialization.lazyObject(async () => (await import("..")).File_),
    })
    .transform<Hume.Source>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Source {
    type Raw = Source.Url | Source.File;

    interface Url extends serializers.Url.Raw {
        type: "url";
    }

    interface File extends serializers.File_.Raw {
        type: "file";
    }
}