import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [PostModule, DbModule],
  controllers: [AppController],
})
export class AppModule {}
