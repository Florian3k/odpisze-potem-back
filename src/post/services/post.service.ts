import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PostEntity } from '../entities';
import { PostModel } from '../models';
import { UserEntity } from '../../user/entities';
import { UserModel } from '../../user/models';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAll(): Promise<PostModel[]> {
    return this.postRepository.find();
  }

  async getById(id: string): Promise<PostModel | null> {
    try {
      // tslint:disable-next-line: strict-boolean-expressions
      return (await this.postRepository.findOne(id)) || null;
    } catch (error) {
      return null;
    }
  }

  async create(
    title: string,
    content: string,
    user: UserModel,
  ): Promise<PostModel> {
    const owner = await this.userRepository.findOneOrFail(user.id);

    const newPost = this.postRepository.create({
      content,
      title,
      author: owner,
    });
    const { author, ...post } = await this.postRepository.save(newPost);

    return post;
  }
}
