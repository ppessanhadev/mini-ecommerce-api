import { Body } from '@nestjs/common';
import { DefineController, DefineRoute } from '@application/decorators';
import { CreateProductDTO } from '@application/schemas/create-product.schema';
import { CreateProductUseCase } from '@domain/products/create-product.usecase';

@DefineController('product')
export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  @DefineRoute({
    method: 'POST',
    summary: 'Creates a new product',
    code: 204,
  })
  public async create(@Body() body: CreateProductDTO) {
    await this.createProductUseCase.create(body.name);
  }
}
