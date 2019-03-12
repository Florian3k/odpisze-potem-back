import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { GetAllPostsResponseDto, GetPostResponseDto } from '../dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAll(): GetAllPostsResponseDto {
    return {
      posts: this.postService.getAll(),
    };
  }

  @Get(':id')
  getById(@Param('id') id: string): GetPostResponseDto {
    const post = this.postService.getById(id);
    if (!post) {
      throw new NotFoundException('Post with given id does not exist');
    }
    return { post };
  }
}
