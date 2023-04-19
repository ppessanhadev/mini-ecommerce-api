import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const ListProductsSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    stock: z.number(),
    image: z.string(),
  }),
);

export class ListProductResponse extends createZodDto(ListProductsSchema) {}
