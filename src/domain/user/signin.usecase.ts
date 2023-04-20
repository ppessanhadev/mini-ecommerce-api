import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Injectable, BadRequestException } from '@nestjs/common';
import { User } from '@infra/models/user.model';
import { UserRepository } from '@infra/repositories/user.repository';

@Injectable()
export class SigninUseCase {
  constructor(private userRepository: UserRepository, private jwtService: JwtService, private config: ConfigService) {}

  public async signIn(user: User) {
    const dbUser = await this.userRepository.findOne({ username: user.username });

    if (!dbUser) {
      throw new BadRequestException('User not found.');
    }

    const isSamePassword = await bcrypt.compare(user.password, dbUser.password);

    if (!isSamePassword) {
      throw new BadRequestException('Wrong password.');
    }

    return this.jwtService.signAsync(
      { username: dbUser.username },
      {
        secret: this.config.get('JWT_SECRET_KEY'),
        expiresIn: '12h',
      },
    );
  }
}
