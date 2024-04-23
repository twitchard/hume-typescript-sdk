/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const Bcp47Tag: core.serialization.Schema<serializers.customModels.Bcp47Tag.Raw, Hume.customModels.Bcp47Tag> =
    core.serialization.enum_([
        "zh",
        "da",
        "nl",
        "en",
        "en-AU",
        "en-IN",
        "en-NZ",
        "en-GB",
        "fr",
        "fr-CA",
        "de",
        "hi",
        "hi-Latn",
        "id",
        "it",
        "ja",
        "ko",
        "no",
        "pl",
        "pt",
        "pt-BR",
        "pt-PT",
        "ru",
        "es",
        "es-419",
        "sv",
        "ta",
        "tr",
        "uk",
    ]);

export declare namespace Bcp47Tag {
    type Raw =
        | "zh"
        | "da"
        | "nl"
        | "en"
        | "en-AU"
        | "en-IN"
        | "en-NZ"
        | "en-GB"
        | "fr"
        | "fr-CA"
        | "de"
        | "hi"
        | "hi-Latn"
        | "id"
        | "it"
        | "ja"
        | "ko"
        | "no"
        | "pl"
        | "pt"
        | "pt-BR"
        | "pt-PT"
        | "ru"
        | "es"
        | "es-419"
        | "sv"
        | "ta"
        | "tr"
        | "uk";
}
