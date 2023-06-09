import { Injectable } from '@nestjs/common';
import { Product } from '@infra/models/product.model';
import { ProductRepository } from '@infra/repositories/product.repository';

@Injectable()
export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  public async create(product: Product) {
    await this.productRepository.create({ ...product });
  }
}
