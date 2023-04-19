import { Body } from '@nestjs/common';
import { Product } from '@infra/models/product.model';
import { CreateProductDTO } from '@schemas/create-product.schema';
import { DefineController, DefineRoute } from '@application/decorators';
import { CreateProductUseCase } from '@domain/products/create-product.usecase';

@DefineController('product')
export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  @DefineRoute({
    method: 'POST',
    summary: 'Creates a new product',
    code: 204,
    response: { description: 'No content' },
  })
  public async create(@Body() body: CreateProductDTO) {
    await this.createProductUseCase.create(body as Product);
  }
}
