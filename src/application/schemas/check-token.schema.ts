import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CheckTokenSchema = z.object({ message: z.string() });

export class CheckTokenResponse extends createZodDto(CheckTokenSchema) {}
