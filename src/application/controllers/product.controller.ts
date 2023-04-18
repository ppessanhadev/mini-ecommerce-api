import { ConfigService } from '@nestjs/config';
import { DefineController, DefineRoute } from '@application/decorators';

@DefineController({ tag: 'Products', path: 'product' })
export class ProductController {
  constructor(private config: ConfigService) {}

  @DefineRoute({
    method: 'GET',
    summary: 'List all products avaliable',
  })
  public async list() {
    const valor = this.config.get('TEST_VALUE');

    return {
      produtins: ['algo aqui', 'outra coisa ali'],
      qtd: 250,
      valor,
    };
  }
}
