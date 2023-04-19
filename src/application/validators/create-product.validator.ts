import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CreateProductSchema = z.object({
  name: z.string(),
  price: z.number(),
  stock: z.number(),
  image: z
    .any()
    .refine((file) => file?.size <= 1000000 * 10, 'Tamanho max. permitido: 10MB')
    .refine((file) => file?.type.includes(['image/jpg', 'image/png']), 'Formatos permitidos: JPG e PNG')
    .optional(),
});

export class CreateProductDTO extends createZodDto(CreateProductSchema) {}
