import { Injectable } from '@nestjs/common';
import { ProductRepository } from '@infra/repositories/product.repository';

@Injectable()
export class ListProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  public async list() {
    const products = await this.productRepository.findAll({});
    return products;
  }
}
