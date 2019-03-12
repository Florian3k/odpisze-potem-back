// tslint:disable: max-classes-per-file
import { PostModel } from '../../models';

export class GetAllPostsResponseDto {
  posts: PostModel[];
}

export class GetPostResponseDto {
  post?: PostModel;
}
