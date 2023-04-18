import { ApiTags } from '@nestjs/swagger';
import { applyDecorators, Controller } from '@nestjs/common';
import { DefineControllerOptions } from '@schemas/decorators/DefineControllerOptions';

/**
 * @param {DefineControllerOptions} options - receive an object with swagger tag and path name (both are optional).
 * @example
 * |@DefineRoute({ path: 'example', tag: 'Example' })
 * class AnyRoute {
 *    ...
 * }
 */
export const DefineController = (options?: DefineControllerOptions) => {
  const { path, tag } = options;

  return applyDecorators(ApiTags(tag || ''), Controller(path || ''));
};
