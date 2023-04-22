import { CheckTokenResponse } from '@schemas/check-token.schema';
import { DefineController, DefineRoute } from '@application/decorators';

@DefineController('user')
export class CheckTokenController {
  @DefineRoute({
    method: 'GET',
    route: 'check-token',
    summary: 'Check if token is valid',
    response: { type: CheckTokenResponse },
    auth: true,
  })
  public async checkToken() {
    return { message: 'ok' };
  }
}
