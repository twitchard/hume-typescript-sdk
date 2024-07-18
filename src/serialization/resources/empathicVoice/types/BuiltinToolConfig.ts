/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../index';
import * as Hume from '../../../../api/index';
import * as core from '../../../../core';
import { BuiltInTool } from './BuiltInTool';

export const BuiltinToolConfig: core.serialization.ObjectSchema<
  serializers.empathicVoice.BuiltinToolConfig.Raw,
  Hume.empathicVoice.BuiltinToolConfig
> = core.serialization.object({
  name: BuiltInTool,
  fallbackContent: core.serialization.property(
    'fallback_content',
    core.serialization.string().optional(),
  ),
});

export declare namespace BuiltinToolConfig {
  interface Raw {
    name: BuiltInTool.Raw;
    fallback_content?: string | null;
  }
}
