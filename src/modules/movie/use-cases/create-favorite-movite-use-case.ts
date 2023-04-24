import { Inject, Injectable } from '@nestjs/common';
import {
  IMovieService,
  IMovieServiceName,
} from '../services/movie.service.interface';
import { ICreateFavoriteMovieRequestDto } from '../dto/create-favorite-movie.request.dto';
import { ICreateFavoriteMovieResponseDto } from '../dto/create-favorite-movie.response.dtos';
import { ICreateFavoriteMovieUseCase } from './create-favorite-movie-use-case.interface';

@Injectable()
export class CreateFavoriteMovieUseCase implements ICreateFavoriteMovieUseCase {
  constructor(
    @Inject(IMovieServiceName)
    private readonly movieService: IMovieService,
  ) {}

  async execute(
    movie: ICreateFavoriteMovieRequestDto,
  ): Promise<ICreateFavoriteMovieResponseDto> {
    return this.movieService.createFavoriteMovie(movie);
  }
}
