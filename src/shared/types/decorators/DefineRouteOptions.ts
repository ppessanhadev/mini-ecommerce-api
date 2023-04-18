import { ApiParamOptions, ApiQueryOptions, ApiResponseOptions } from '@nestjs/swagger';

export interface DefineRouteOptions {
  summary?: string;
  method?: 'GET' | 'POST' | 'UPDATE' | 'DELETE';
  route?: string | '';
  code?: number | 200;
  response?: ApiResponseOptions;
  queries?: ApiQueryOptions[];
  params?: ApiParamOptions[];
}
