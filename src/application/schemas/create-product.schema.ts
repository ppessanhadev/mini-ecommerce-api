import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CreateProductSchema = z.object({
  name: z.string(),
  price: z.number(),
  stock: z.number(),
  image: z.string().optional(),
});

export class CreateProductDTO extends createZodDto(CreateProductSchema) {}
