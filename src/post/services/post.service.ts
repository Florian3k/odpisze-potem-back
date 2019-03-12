import { Injectable } from '@nestjs/common';
import { PostModel } from '../../models';

@Injectable()
export class PostService {
  private mockPosts: PostModel[] = [
    {
      id: 'a2bbd45b-f1e5-48ad-bcb7-b0a4e990196a',
      title: 'Hello World',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 'c605a343-1cbb-4250-8534-92d42eac6dd3',
      title: 'Yeah! It works!',
      content: 'n/a',
    },
  ];

  getAll(): PostModel[] {
    return this.mockPosts;
  }

  getById(id: string): PostModel | null {
    return this.mockPosts.find(post => post.id === id) || null;
  }
}
