import { Inject, Injectable } from '@nestjs/common';
import { ICheckIsFavoriteMovieUseCase } from './check-is-favorite-movie-use-case.interface';
import {
  IMovieService,
  IMovieServiceName,
} from '../services/movie.service.interface';
import {
  ICheckIsFavoriteMovieRequestDto,
  ICheckIsFavoriteMovieResponseDto,
} from '../dto';

@Injectable()
export class CheckIsFavoriteMovieUseCase
  implements ICheckIsFavoriteMovieUseCase
{
  constructor(
    @Inject(IMovieServiceName)
    private readonly movieService: IMovieService,
  ) {}

  async execute(
    data: ICheckIsFavoriteMovieRequestDto,
  ): Promise<ICheckIsFavoriteMovieResponseDto> {
    return this.movieService.checkIsFavoriteMovie(data);
  }
}
