import { Injectable } from '@nestjs/common';
import { ProductRepository } from '@infra/repositories/product.repository';

@Injectable()
export class DeleteProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  public async delete(id: string) {
    await this.productRepository.delete(id);
    return { id };
  }
}
