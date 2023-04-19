import { Module } from '@nestjs/common';
import { ProductDomainModule } from '@domain/products/products.module';
import { ListProductsController } from '@application/controllers/product/list-products.controller';
import { CreateProductController } from '@application/controllers/product/create-product.controller';
import { UpdateProductController } from '@application/controllers/product/update-product.controller';

@Module({
  controllers: [CreateProductController, ListProductsController, UpdateProductController],
  imports: [ProductDomainModule],
})
export class ProductModule {}
