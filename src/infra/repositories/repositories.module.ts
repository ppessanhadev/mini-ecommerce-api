import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@infra/models/user.model';
import { Product, ProductSchema } from '@infra/models/product.model';
import { UserRepository } from '@infra/repositories/user.repository';
import { ProductRepository } from '@infra/repositories/product.repository';
import { UserSeed } from '@infra/seeds/user.seed';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  exports: [ProductRepository, UserRepository],
  providers: [ProductRepository, UserRepository, UserSeed],
})
export class RepositoriesModule {}
