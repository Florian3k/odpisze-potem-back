import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';
import { DbModule } from './db/db.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PostModule, DbModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
