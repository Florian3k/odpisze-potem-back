import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { GetAllPostsResponseDto, GetPostResponseDto } from '../dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAll(): Promise<GetAllPostsResponseDto> {
    return {
      posts: await this.postService.getAll(),
    };
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<GetPostResponseDto> {
    const post = await this.postService.getById(id);
    if (!post) {
      throw new NotFoundException('Post with given id does not exist');
    }
    return { post };
  }
}
