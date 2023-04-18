import { ApiTags } from '@nestjs/swagger';
import { ZodValidationPipe } from 'nestjs-zod';
import { applyDecorators, Controller, UsePipes } from '@nestjs/common';

/**
 * @param {DefineControllerOptions} options - receive an object with swagger tag and path name (both are optional).
 * @example
 * |@DefineRoute('Route')
 * class AnyRoute {
 *    ...
 * }
 */
export const DefineController = (path?: string) => {
  return applyDecorators(
    ApiTags(path.toLowerCase() || ''),
    Controller(path.toLowerCase() || ''),
    UsePipes(ZodValidationPipe),
  );
};
