import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod, VersioningType } from '@nestjs/common';
import { appPipes } from './app.pipes';
import { AppExceptionFilter } from './commons/filters';
import { setupSwagger } from './infra/swagger';
import { API_ROOT_URL, HEALTH_CHECK_URL, SERVER_PORT } from './app.constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.enableVersioning({ type: VersioningType.URI });

  app.useGlobalPipes(...appPipes);
  app.useGlobalFilters(new AppExceptionFilter());

  app.setGlobalPrefix(API_ROOT_URL, {
    exclude: [{ path: HEALTH_CHECK_URL, method: RequestMethod.GET }],
  });

  setupSwagger(app);
  await app.listen(SERVER_PORT);
}
bootstrap();
