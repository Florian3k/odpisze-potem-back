// tslint:disable: max-classes-per-file
export class RegisterUserRequestDto {
  nickname: string;
  email: string;
  password: string;
}

export class RegisterUserResponseDto {
  id: string;
  nickname: string;
  email: string;
}
