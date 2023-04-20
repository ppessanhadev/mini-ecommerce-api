import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SigninUseCase } from '@domain/user/signin.usecase';
import { RepositoriesModule } from '@infra/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule, JwtModule],
  providers: [SigninUseCase],
  exports: [SigninUseCase],
})
export class UserDomainModule {}
