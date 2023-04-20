import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { UserRepository } from '@infra/repositories/user.repository';

@Injectable()
export class UserSeed implements OnModuleInit {
  constructor(private userRepository: UserRepository, private config: ConfigService) {}

  async onModuleInit() {
    try {
      const encryptedPassword = await bcrypt.hash(
        this.config.get('ADMIN_PASSWORD'),
        Number(this.config.get('BCRYPT_ROUNDS')),
      );

      const adminExists = await this.userRepository.findOne({ username: this.config.get('ADMIN_USERNAME') });
      if (adminExists) {
        return Logger.warn('Admin already created.', 'User Seed');
      }

      await this.userRepository.create({
        username: this.config.get('ADMIN_USERNAME'),
        password: encryptedPassword,
      });
      Logger.log('User created sucessfully', 'User Seed');
    } catch (e) {
      throw e;
    }
  }
}
