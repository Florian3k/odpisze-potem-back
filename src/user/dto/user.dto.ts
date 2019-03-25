// tslint:disable: max-classes-per-file
import { UserModel } from '../models';
import { IsString, IsEmail, IsAlphanumeric, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterUserRequestDto {
  @IsAlphanumeric()
  @MinLength(3)
  @ApiModelProperty()
  nickname: string;

  @IsEmail()
  @ApiModelProperty()
  email: string;

  @IsString()
  @MinLength(8)
  @ApiModelProperty()
  password: string;
}

export class RegisterUserResponseDto {
  @ApiModelProperty()
  user: UserModel;
}

export class LoginUserRequestDto {
  @ApiModelProperty()
  @IsString()
  nickname: string;

  @IsString()
  @ApiModelProperty()
  password: string;
}

export class LoginUserResponseDto {
  @ApiModelProperty()
  user: UserModel;

  @ApiModelProperty()
  token: string;
}
