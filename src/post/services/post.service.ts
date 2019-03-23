import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities';
import { PostModel } from '../models';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
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
}
