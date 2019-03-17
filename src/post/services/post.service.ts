import { Injectable } from '@nestjs/common';
import { PostModel } from '../../models';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  private mockPosts: PostModel[] = [
    {
      id: 'a2bbd45b-f1e5-48ad-bcb7-b0a4e990196a',
      title: 'Hello World',
      content: 'Lorem ipsum dolor sit amet',
      createdAt: new Date(),
    },
    {
      id: 'c605a343-1cbb-4250-8534-92d42eac6dd3',
      title: 'Yeah! It works!',
      content: 'n/a',
      createdAt: new Date(),
    },
  ];

  getAll(): PostModel[] {
    return this.mockPosts;
  }

  getById(id: string): PostModel | null {
    return this.mockPosts.find(post => post.id === id) || null;
  }
}
