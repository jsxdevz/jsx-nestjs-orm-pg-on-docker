import './utils/polyfills';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // เปิดใช้งาน Validation
  app.useGlobalPipes(new ValidationPipe());

  // ตั้งค่า Swagger
  const config = new DocumentBuilder()
    .setTitle('Tasks API')
    .setDescription('API สำหรับจัดการ Tasks')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
