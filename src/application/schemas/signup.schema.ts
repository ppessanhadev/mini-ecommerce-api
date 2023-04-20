import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SigninSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export class SigninDTO extends createZodDto(SigninSchema) {}
export class SigninResponse extends createZodDto(z.object({ token: z.string() })) {}
