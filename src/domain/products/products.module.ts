import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/repositories/repositories.module';
import { ListProductsUseCase } from '@domain/products/list-products.usecase';
import { CreateProductUseCase } from '@domain/products/create-product.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [CreateProductUseCase, ListProductsUseCase],
  exports: [CreateProductUseCase, ListProductsUseCase],
})
export class ProductDomainModule {}
