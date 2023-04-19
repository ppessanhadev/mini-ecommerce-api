import { Module } from '@nestjs/common';
import { ProductDomainModule } from '@domain/products/products.module';
import { ListProductsController } from '@application/controllers/product/list-products.controller';
import { CreateProductController } from '@application/controllers/product/create-product.controller';

@Module({
  controllers: [CreateProductController, ListProductsController],
  imports: [ProductDomainModule],
})
export class ProductModule {}
