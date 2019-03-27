import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const swaggerOptions = new DocumentBuilder()
    .setTitle('odpisze-potem api')
    .setVersion('0.0.1')
    .addBearerAuth(process.env.TOKEN_HEADER_NAME, 'header')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('docs', app, swaggerDocument);

  await app.listen(process.env.NODE_PORT as string);
}
bootstrap();
