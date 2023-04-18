import { DefineController, DefineRoute } from '@application/decorators';

@DefineController('Product')
export class ListProductsController {
  @DefineRoute({
    method: 'GET',
    summary: 'List all avaliable products',
  })
  public async list() {
    return {
      produtins: ['algo aqui', 'outra coisa ali'],
      qtd: 250,
    };
  }
}
