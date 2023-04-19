import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, _id: false })
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  stock: number;

  @Prop({ required: false })
  image?: string;
}

export type ProductDocument = HydratedDocument<Product>;
export const ProductSchema = SchemaFactory.createForClass(Product);
