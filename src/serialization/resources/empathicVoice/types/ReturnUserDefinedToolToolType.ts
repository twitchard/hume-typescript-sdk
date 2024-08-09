/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from '../../../index';
import * as Hume from '../../../../api/index';
import * as core from '../../../../core';

export const ReturnUserDefinedToolToolType: core.serialization.Schema<
  serializers.empathicVoice.ReturnUserDefinedToolToolType.Raw,
  Hume.empathicVoice.ReturnUserDefinedToolToolType
> = core.serialization.enum_(['BUILTIN', 'FUNCTION']);

export declare namespace ReturnUserDefinedToolToolType {
  type Raw = 'BUILTIN' | 'FUNCTION';
}