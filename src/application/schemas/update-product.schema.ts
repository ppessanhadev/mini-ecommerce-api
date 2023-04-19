import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const UpdateProductSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  price: z.number().optional(),
  stock: z.number().optional(),
  image: z.string().optional(),
});

export class UpdateProductDTO extends createZodDto(UpdateProductSchema.omit({ id: true })) {}

export class UpdateProductResponse extends createZodDto(UpdateProductSchema) {}
