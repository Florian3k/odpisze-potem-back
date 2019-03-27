// tslint:disable: max-classes-per-file
import { ApiModelProperty } from '@nestjs/swagger';
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
  title: string;
  content: string;
}

export class CreatePostResponseDto {
  post: PostModel;
}
