import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  access_token: string;
}
