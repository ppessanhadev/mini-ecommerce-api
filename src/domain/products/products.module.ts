import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/repositories/repositories.module';
import { ListProductsUseCase } from '@domain/products/list-products.usecase';
import { CreateProductUseCase } from '@domain/products/create-product.usecase';
import { UpdateProductUseCase } from '@domain/products/update-product.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [CreateProductUseCase, ListProductsUseCase, UpdateProductUseCase],
  exports: [CreateProductUseCase, ListProductsUseCase, UpdateProductUseCase],
})
export class ProductDomainModule {}
