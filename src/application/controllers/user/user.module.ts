import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserDomainModule } from '@domain/user/user.module';
import { SigninController } from '@controllers/user/signin.controller';

@Module({
  imports: [UserDomainModule, JwtModule],
  controllers: [SigninController],
})
export class UserModule {}
