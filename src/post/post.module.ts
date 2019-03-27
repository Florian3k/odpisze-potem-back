import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { PostEntity } from './entities';
import { UserMiddleware } from '../user/middlewares/user.middleware';
import { AuthService } from '../user/services/auth.service';
import { UserEntity } from '../user/entities';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, UserEntity])],
  controllers: [PostController],
  providers: [PostService, AuthService],
})
export class PostModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes(PostController);
  }
}
