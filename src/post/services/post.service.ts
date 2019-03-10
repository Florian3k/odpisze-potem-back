import { Injectable } from '@nestjs/common';
import { PostModel } from '../../models';

@Injectable()
export class PostService {
  getAll(): PostModel[] {
    return [];
  }
}
