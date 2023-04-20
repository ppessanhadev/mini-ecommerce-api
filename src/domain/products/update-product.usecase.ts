import { BadRequestException, Injectable } from '@nestjs/common';
import { Product } from '@infra/models/product.model';
import { ProductRepository } from '@infra/repositories/product.repository';

@Injectable()
export class UpdateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  public async update(id: string, product: Product) {
    const response = await this.productRepository.update(id, product);

    if (!response) {
      throw new BadRequestException('Product not found');
    }
    return { id, ...product };
  }
}
