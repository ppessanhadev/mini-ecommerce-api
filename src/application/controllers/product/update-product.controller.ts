import { Body, Query } from '@nestjs/common';
import { Product } from '@infra/models/product.model';
import { DefineController, DefineRoute } from '@application/decorators';
import { UpdateProductUseCase } from '@domain/products/update-product.usecase';
import { UpdateProductDTO, UpdateProductResponse } from '@schemas/update-product.schema';

@DefineController('product')
export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}

  @DefineRoute({
    method: 'UPDATE',
    summary: 'Updates one product, receives an id as query and all the data on requested body to be updated',
    queries: [{ name: 'id', example: '64403854193a51b25199143e' }],
    response: { type: UpdateProductResponse },
    auth: true,
  })
  public async create(@Body() product: UpdateProductDTO, @Query('id') id: string) {
    const response = await this.updateProductUseCase.update(id, product as Product);

    return response;
  }
}
