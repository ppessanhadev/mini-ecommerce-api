import { HydratedDocument } from 'mongoose';
import { v1 as uuid } from 'uuid';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Product {
  @Prop({ type: String, default: () => uuid() })
  _id: string;

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
