import { Type } from '@nestjs/common';
import { ApiParamOptions, ApiQueryOptions } from '@nestjs/swagger';

export class SetRouteOptions {
  summary: string;
  method?: 'GET' | 'POST' | 'UPDATE' | 'DELETE';
  route?: string | '';
  code?: number | 200;
  responseType?: string | Type<unknown>;
  name?: string;
  queries?: ApiQueryOptions[];
  params?: ApiParamOptions[];
}
