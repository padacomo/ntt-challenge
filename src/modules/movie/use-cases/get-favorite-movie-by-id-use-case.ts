import { Inject, Injectable } from '@nestjs/common';
import { IGetFavoriteMovieByIdUseCase } from './get-favorite-movie-by-id-use-case.interface';
import {
  IMovieService,
  IMovieServiceName,
} from '../services/movie.service.interface';
import { IGetFavoriteMovieByIdResponseDto } from '../dto/get-favorite-movie-by-id.response.dto';

@Injectable()
export class GetFavoriteMovieByIdUseCase
  implements IGetFavoriteMovieByIdUseCase
{
  constructor(
    @Inject(IMovieServiceName)
    private readonly movieService: IMovieService,
  ) {}

  async execute(id: number): Promise<IGetFavoriteMovieByIdResponseDto> {
    return this.movieService.getFavoriteMovie(id);
  }
}
