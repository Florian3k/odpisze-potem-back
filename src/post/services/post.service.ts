import { Injectable } from '@nestjs/common';
import { PostModel } from '../../models';

@Injectable()
export class PostService {
  private mockPosts: PostModel[] = [
    { title: 'Hello World', content: 'Lorem ipsum dolor sit amet' },
    { title: `Yeah! It works!`, content: 'n/a' },
  ];

  getAll(): PostModel[] {
    return this.mockPosts;
  }
}
