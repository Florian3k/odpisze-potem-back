import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(),
  ],
})
export class DbModule {}
