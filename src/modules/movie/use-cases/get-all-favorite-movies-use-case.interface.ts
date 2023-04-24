import { PaginationResponseType } from 'src/commons/paginate/type/pagination.response.type';
import { IGetAllMoviesRequest } from '../../../commons/paginate/pagination.interface';
import { FavoriteMovie } from '../models/FavoriteMovie.entity';

export interface IGetAllFavoriteMoviesUseCase {
  execute(
    param: IGetAllMoviesRequest,
  ): Promise<PaginationResponseType<FavoriteMovie>>;
}

export const IGetAllFavoriteMoviesCaseName = 'IGetAllFavoriteMoviesCase';
