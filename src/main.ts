import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))

  // This is to enable any host to come from any host
  app.enableCors({
    origin: true
  })

  const config = new DocumentBuilder()
  .setTitle('API Documentation')
  .setDescription('API documentation for Smart Gift Bot')
  .setVersion('1.0')
  .addBearerAuth() // Add this if your app uses JWT for auth
  .build();

// Create Swagger document
const document = SwaggerModule.createDocument(app, config);

// Set up Swagger at /api endpoint
SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();