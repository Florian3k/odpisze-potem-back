// tslint:disable: max-classes-per-file
import { UserModel } from '../models';

export class RegisterUserRequestDto {
  nickname: string;
  email: string;
  password: string;
}

export class RegisterUserResponseDto {
  user: UserModel;
}

export class LoginUserRequestDto {
  nickname: string;
  password: string;
}

export class LoginUserResponseDto {
  user: UserModel;
  token: string;
}
