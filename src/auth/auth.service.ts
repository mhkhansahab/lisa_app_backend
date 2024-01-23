import { Inject, Injectable } from '@nestjs/common';
import { LoginDto } from './auth.dto';
import { HttpService } from '@nestjs/axios';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService) private readonly userService: UserService,
    private readonly httpService: HttpService,
  ) {}

  async login(loginData: LoginDto) {
    try {
      const userProfile = await this.httpService.axiosRef.get(
        process.env.AUTH0_DOMAIN,
        {
          headers: {
            Authorization: `Bearer ${loginData?.access_token}`,
          },
        },
      );

      const user = await this.userService.create({
        name: userProfile?.data?.name,
        email: userProfile?.data?.email,
        picture: userProfile?.data?.picture,
      });

      return {
        success: true,
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      };
    } catch (e) {
      return {
        success: false,
        message: 'User is not authenticated',
      };
    }
  }
}
