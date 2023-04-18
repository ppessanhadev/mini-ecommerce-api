import { applyDecorators, Get, Post, Patch, Delete, HttpCode } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { DefineRouteOptions } from '@shared/types/decorators/DefineRouteOptions';

/**
 * @param {DefineRouteOptions} option - receive an object with DefineRouteOptions (all are optional).
 * @example
 * class AnyRoute {
 *    |@DefineRoute({
 *      method: 'POST',
 *      summary: 'This is an example',
 *      queries: [{ name: 'search', example: 'something' }],
 *      code: 201,
 *      responseType: GenericType
 *    })
 *    async index() {}
 * }
 */
export const DefineRoute = (option: DefineRouteOptions) => {
  const { method, summary, responseType, queries, params } = option;
  const route = option?.route || '';
  const code = option.code || 200;

  const methods = {
    GET: Get,
    POST: Post,
    UPDATE: Patch,
    DELETE: Delete,
  };

  const applyQueries = () => {
    if (!queries) return [];
    return queries.map((query) => ApiQuery(query));
  };

  const applyParams = () => {
    if (!params) return [];
    return params.map((param) => ApiParam(param));
  };

  return applyDecorators(
    methods[method || 'GET'](route),
    ApiOperation({ summary: summary || '' }),
    ApiOkResponse({ type: responseType || '' }),
    HttpCode(code),
    ...applyQueries(),
    ...applyParams(),
  );
};
