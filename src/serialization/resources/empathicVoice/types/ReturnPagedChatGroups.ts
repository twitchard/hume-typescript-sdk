/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnChatGroup } from "./ReturnChatGroup";

export const ReturnPagedChatGroups: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnPagedChatGroups.Raw,
    Hume.empathicVoice.ReturnPagedChatGroups
> = core.serialization.object({
    pageNumber: core.serialization.property("page_number", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    chatGroupsPage: core.serialization.property("chat_groups_page", core.serialization.list(ReturnChatGroup)),
});

export declare namespace ReturnPagedChatGroups {
    interface Raw {
        page_number: number;
        page_size: number;
        chat_groups_page: ReturnChatGroup.Raw[];
    }
}