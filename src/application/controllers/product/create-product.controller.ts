import { Body } from '@nestjs/common';
import { DefineController, DefineRoute } from '@application/decorators';
import { CreateProductDTO } from '@application/schemas/create-product.schema';

@DefineController('product')
export class CreateProductController {
  @DefineRoute({
    method: 'POST',
    summary: 'Creates a new product',
    response: { type: CreateProductDTO },
  })
  public async create(@Body() body: CreateProductDTO) {
    return body;
  }
}
