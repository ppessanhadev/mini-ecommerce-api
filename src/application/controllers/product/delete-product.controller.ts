import { Query } from '@nestjs/common';
import { DeleteProductResponse } from '@schemas/delete-product.schema';
import { DefineController, DefineRoute } from '@application/decorators';
import { DeleteProductUseCase } from '@domain/products/delete-product.usecase';

@DefineController('product')
export class DeleteProductController {
  constructor(private deleteProductUseCase: DeleteProductUseCase) {}

  @DefineRoute({
    method: 'DELETE',
    summary: 'Delete a product, receives an id as query and then remove from database',
    queries: [{ name: 'id', example: '64403854193a51b25199143e' }],
    response: { type: DeleteProductResponse },
  })
  public async create(@Query('id') id: string) {
    const response = await this.deleteProductUseCase.delete(id);

    return response;
  }
}
