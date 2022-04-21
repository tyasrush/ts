import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // adding validation pipes for all endpoints
  app.useGlobalPipes(new ValidationPipe())

  // setup swagger document properties
  const swConfig = new DocumentBuilder()
  .setTitle('Test API')
  .setDescription('Documentation for Test API in my local computer')
  .setVersion('1.0')
  .build()

  // register document into swagger module
  const swagDoc = SwaggerModule.createDocument(app, swConfig)
  // bind swagger module into app
  SwaggerModule.setup('docs', app, swagDoc)

  await app.listen(3000);
}
bootstrap();
