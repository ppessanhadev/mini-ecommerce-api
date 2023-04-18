import { SetRoute } from '@decorators/set-route.decorator';
import { Controller } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private config: ConfigService) {}

  @SetRoute({
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
