import { Inject, Injectable } from '@nestjs/common';
import { IGetAllFavoriteMoviesUseCase } from './get-all-favorite-movies-use-case.interface';
import {
  IMovieService,
  IMovieServiceName,
} from '../services/movie.service.interface';
import { IGetAllMoviesRequest } from 'src/commons/paginate';
import { PaginationResponseType } from 'src/commons/paginate/type/pagination.response.type';
import { FavoriteMovie } from '../models/FavoriteMovie.entity';

@Injectable()
export class GetAllFavoriteMoiviesUseCase
  implements IGetAllFavoriteMoviesUseCase
{
  constructor(
    @Inject(IMovieServiceName)
    private readonly movieService: IMovieService,
  ) {}

  async execute(
    params: IGetAllMoviesRequest,
  ): Promise<PaginationResponseType<FavoriteMovie>> {
    return this.movieService.getAllFavoriteMovies(params);
  }
}
