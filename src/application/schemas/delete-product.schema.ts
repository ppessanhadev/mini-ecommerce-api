import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const DeleteProductSchema = z.object({
  id: z.string(),
});

export class DeleteProductResponse extends createZodDto(DeleteProductSchema) {}
