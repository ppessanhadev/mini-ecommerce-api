import helmet from 'helmet';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { patchNestJsSwagger } from 'nestjs-zod';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Logger, VersioningType } from '@nestjs/common';

const swaggerConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Mini ecommerce API')
    .setDescription('An mini ecommerce CRUD')
    .setVersion('1.0')
    .build();

  patchNestJsSwagger();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
};

const appConfig = (app: INestApplication) => {
  app
    .enableVersioning({ type: VersioningType.URI, defaultVersion: '1' })
    .setGlobalPrefix('api')
    .use(helmet())
    .enableCors();
};

const initialize = async () => {
  const port = process.env.PORT || '3000';
  const app = await NestFactory.create(AppModule);

  appConfig(app);
  swaggerConfig(app);

  await app.listen(port);
  Logger.log(`Server is running on port ${port}`, 'NestApplication');
};

initialize();
