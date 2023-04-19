import { CreateProductDTO } from '@schemas/create-product.schema';
import { DefineController, DefineRoute } from '@application/decorators';
import { ListProductsUseCase } from '@domain/products/list-products.usecase';

@DefineController('product')
export class ListProductsController {
  constructor(private listProductUseCase: ListProductsUseCase) {}

  @DefineRoute({
    method: 'GET',
    summary: 'List all avaliable products',
    response: { type: CreateProductDTO },
  })
  public async list() {
    const response = await this.listProductUseCase.list();
    return response;
  }
}
