import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../entities';
import { UserModel } from '../models';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(
    nickname: string,
    plaintextPassword: string,
    email: string,
  ): Promise<UserModel> {
    const collidingUsers = await this.userRepository.find({
      where: [{ nickname }, { email }],
    });
    if (collidingUsers.length !== 0) {
      throw new UnprocessableEntityException(
        'User with given nickname/email exists',
      );
    }
    const hashedPassword = await bcrypt.hash(plaintextPassword, 10);
    const createdUser = this.userRepository.create({
      nickname,
      email,
      password: hashedPassword,
    });
    const {
      password,
      registeredAt,
      // tslint:disable-next-line: trailing-comma
      ...newUser
    } = await this.userRepository.save(createdUser);
    return newUser;
  }

  async findByCredentials(
    nickname: string,
    password: string,
  ): Promise<UserModel | null> {
    const user = await this.userRepository.findOne({ where: { nickname } });
    if (!user) {
      return null;
    }
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return null;
    }
    // tslint:disable-next-line: variable-name
    const { password: _password, registeredAt, ...userModel } = user;
    return userModel;
  }
}
