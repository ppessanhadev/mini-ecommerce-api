import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserDomainModule } from '@domain/user/user.module';
import { SigninController } from '@controllers/user/signin.controller';
import { CheckTokenController } from '@controllers/user/check-token.controller';

@Module({
  imports: [UserDomainModule, JwtModule],
  controllers: [SigninController, CheckTokenController],
})
export class UserModule {}
