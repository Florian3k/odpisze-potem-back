// tslint:disable: max-classes-per-file
import { UserModel } from '../models';
import { IsString, IsEmail, IsAlphanumeric, MinLength } from 'class-validator';

export class RegisterUserRequestDto {
  @IsAlphanumeric()
  @MinLength(3)
  nickname: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}

export class RegisterUserResponseDto {
  user: UserModel;
}

export class LoginUserRequestDto {
  @IsString()
  nickname: string;

  @IsString()
  password: string;
}

export class LoginUserResponseDto {
  user: UserModel;
  token: string;
}
