import { Controller, Get } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { GetAllPostsResponseDto } from '../dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAll(): GetAllPostsResponseDto {
    return {
      posts: this.postService.getAll(),
    };
  }
}
