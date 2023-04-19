import { ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { applyDecorators, Get, Post, Patch, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { DefineRouteOptions } from '@shared/types/decorators/DefineRouteOptions';
import { AuthGuard } from '@application/auth/auth.guard';

/**
 * @param {DefineRouteOptions} option - receive an object with DefineRouteOptions (all are optional).
 * @example
 * class AnyRoute {
 *    |@DefineRoute({
 *      method: 'GET', // default
 *      summary: 'This is an example',
 *      queries: [{ name: 'search', example: 'something' }],
 *      response: { type: ExampleDTO },
 *      code: 200,  // default
 *      auth: false  // default
 *    })
 *    async index() {}
 * }
 */
export const DefineRoute = (option: DefineRouteOptions) => {
  const { method, summary, response, queries, params, auth } = option;
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

  const applyAuth = () => (auth ? [UseGuards(AuthGuard)] : []);

  return applyDecorators(
    methods[method || 'GET'](route),
    HttpCode(code),
    ApiOperation({ summary: summary || '' }),
    ApiResponse({ ...(response || {}), status: code }),
    ...applyAuth(),
    ...applyQueries(),
    ...applyParams(),
  );
};
