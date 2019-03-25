// tslint:disable: max-classes-per-file
import { ApiModelProperty } from '@nestjs/swagger';
import { PostModel } from '../models';

export class GetAllPostsResponseDto {
  @ApiModelProperty()
  posts: PostModel[];
}

export class GetPostResponseDto {
  @ApiModelProperty()
  post?: PostModel;
}
