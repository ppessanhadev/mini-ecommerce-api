import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const UpdateProductSchema = z.object({
  name: z.string().optional(),
  price: z.number().optional(),
  stock: z.number().optional(),
  image: z
    .any()
    .refine((file) => file?.size <= 1000000 * 5, 'Tamanho max. permitido: 5MB')
    .refine((file) => file?.type?.includes(['image/jpg', 'image/png']), 'Formatos permitidos: JPG e PNG')
    .optional(),
});

export class UpdateProductDTO extends createZodDto(UpdateProductSchema) {}
