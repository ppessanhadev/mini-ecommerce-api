import { FilterQuery, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@infra/models/user.model';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  public async findOne(query: FilterQuery<User>) {
    return this.userModel.findOne(query);
  }

  public async create(user: User) {
    return this.userModel.create(user);
  }
}
