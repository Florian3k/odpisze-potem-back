import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { RegisterUserResponseDto, RegisterUserRequestDto } from '../dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
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
}
