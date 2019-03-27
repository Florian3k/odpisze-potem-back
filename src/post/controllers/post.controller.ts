import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiResponse,
  ApiCreatedResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

import {
  GetAllPostsResponseDto,
  GetPostResponseDto,
  CreatePostRequestDto,
  CreatePostResponseDto,
} from '../dto';
import { PostService } from '../services/post.service';
import { AuthGuard } from '../../user/guards/auth.guard';
import { User } from '../../user/decorators/user.decorator';
import { UserModel } from '../../user/models';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @ApiResponse({
    type: GetAllPostsResponseDto,
    status: 200,
  })
  async getAll(): Promise<GetAllPostsResponseDto> {
    return {
      posts: await this.postService.getAll(),
    };
  }

  @Get(':id')
  @ApiResponse({
    type: GetPostResponseDto,
    status: 200,
  })
  async getById(@Param('id') id: string): Promise<GetPostResponseDto> {
    const post = await this.postService.getById(id);
    if (!post) {
      throw new NotFoundException('Post with given id does not exist');
    }
    return { post };
  }

  @Post()
  @UseGuards(AuthGuard)
  @ApiCreatedResponse({ type: CreatePostRequestDto })
  @ApiBearerAuth()
  async create(
    @Body() createPostDto: CreatePostRequestDto,
    @User() user: UserModel,
  ): Promise<CreatePostResponseDto> {
    const post = await this.postService.create(
      createPostDto.title,
      createPostDto.content,
      user,
    );
    return { post };
  }
}
