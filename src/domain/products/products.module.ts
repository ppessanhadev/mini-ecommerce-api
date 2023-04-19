import { Module } from '@nestjs/common';
import { CreateProductUseCase } from './create-product.usecase';

@Module({
  providers: [CreateProductUseCase],
  exports: [CreateProductUseCase],
})
export class ProductDomainModule {}
