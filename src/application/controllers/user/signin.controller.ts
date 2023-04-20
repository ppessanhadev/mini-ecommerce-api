import { Body } from '@nestjs/common';
import { User } from '@infra/models/user.model';
import { SigninUseCase } from '@domain/user/signin.usecase';
import { SigninDTO, SigninResponse } from '@schemas/signup.schema';
import { DefineController, DefineRoute } from '@application/decorators';

@DefineController('user')
export class SigninController {
  constructor(private signinUsecase: SigninUseCase) {}

  @DefineRoute({
    method: 'POST',
    summary: 'Login as adminstrator to create, update and delete products',
    response: { type: SigninResponse },
  })
  public async signIn(@Body() body: SigninDTO) {
    const token = await this.signinUsecase.signIn(body as User);

    return { token };
  }
}
