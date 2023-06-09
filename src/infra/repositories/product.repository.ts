import { FilterQuery, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '@infra/models/product.model';

@Injectable()
export class ProductRepository {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  public async findAll(query: FilterQuery<Product>) {
    const projection = { id: '$_id', _id: 0, name: 1, stock: 1, price: 1, image: 1 };
    return this.productModel.find(query, {}, { projection });
  }

  public async findOne(query: FilterQuery<Product>) {
    return this.productModel.findOne(query);
  }

  public async create(product: Product) {
    return this.productModel.create(product);
  }

  public async update(id: string, product: Partial<Product>) {
    return this.productModel.findOneAndUpdate({ _id: id }, product);
  }

  public async delete(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }

  public async count() {
    return this.productModel.count();
  }
}
