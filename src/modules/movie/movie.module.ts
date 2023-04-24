import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { movieProviders } from './movie.providers';
import { MovieController } from './controller/movie.controller';
import { HttpModule } from '@nestjs/axios';
import { FavoriteMovie } from './models/FavoriteMovie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    TypeOrmModule.forFeature([FavoriteMovie]),
  ],
  providers: movieProviders,
  controllers: [MovieController],
})
export class MovieModule {}
