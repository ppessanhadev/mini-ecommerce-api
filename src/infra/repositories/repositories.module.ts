import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '@infra/models/product.model';
import { ProductRepository } from '@infra/repositories/product.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  exports: [ProductRepository],
  providers: [ProductRepository],
})
export class RepositoriesModule {}
