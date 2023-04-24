import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { resolveEnvFile } from './infra/env';
import { HealthCheckModule } from './modules/healthcheck/healthcheck.module';
import { MovieModule } from './modules/movie/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: resolveEnvFile() }),
    HealthCheckModule,
    MovieModule,
  ],
})
export class AppModule {}
