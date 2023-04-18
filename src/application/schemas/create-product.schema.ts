import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CreateProductSchema = z.object({
  name: z.string(),
  value: z.number(),
  qtd: z.number().max(500, { message: 'Valor precisa ser menor ou igual a 500' }),
  manufactor: z.string().optional(),
});

export class CreateProductDTO extends createZodDto(CreateProductSchema) {}
