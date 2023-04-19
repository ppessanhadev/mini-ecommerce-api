import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CreateProductUseCase {
  public async create(product: string) {
    Logger.log(product);
  }
}
