import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './../user/user.schema';
import { Model } from 'mongoose';
import { LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  login(loginData: LoginDto) {
    console.log(loginData);
  }
}
