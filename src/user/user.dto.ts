import { IsString, IsBoolean } from 'class-validator';
export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  picture: string;
}

export class UpdateUserDto {
  @IsBoolean()
  onboarding: boolean;
}
