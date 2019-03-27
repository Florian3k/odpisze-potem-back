import {
  Controller,
  Post,
  Body,
  ForbiddenException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import {
  RegisterUserResponseDto,
  RegisterUserRequestDto,
  LoginUserRequestDto,
  LoginUserResponseDto,
} from '../dto';
import { AuthService } from '../services/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: RegisterUserResponseDto })
  async register(
    @Body() registerUserDto: RegisterUserRequestDto,
  ): Promise<RegisterUserResponseDto> {
    const { id, nickname, email } = await this.userService.createUser(
      registerUserDto.nickname,
      registerUserDto.password,
      registerUserDto.email,
    );

    return {
      user: { id, nickname, email },
    };
  }

  @Post('/login')
  @ApiOkResponse({ type: LoginUserResponseDto })
  async login(
    @Body() loginUserDto: LoginUserRequestDto,
  ): Promise<LoginUserResponseDto> {
    const user = await this.userService.findByCredentials(
      loginUserDto.nickname,
      loginUserDto.password,
    );
    if (!user) {
      throw new ForbiddenException('Invalid credentials');
    }
    const token = this.authService.tokenSign({ user });
    return { user, token };
  }
}
