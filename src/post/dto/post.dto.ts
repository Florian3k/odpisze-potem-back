// tslint:disable: max-classes-per-file
import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { PostModel } from '../models';

export class GetAllPostsResponseDto {
  @ApiModelProperty({
    isArray: true,
    type: PostModel,
  })
  posts: PostModel[];
}

export class GetPostResponseDto {
  @ApiModelProperty()
  post?: PostModel;
}

export class CreatePostRequestDto {
  @IsString()
  title: string;

  @IsString()
  content: string;
}

export class CreatePostResponseDto {
  post: PostModel;
}
