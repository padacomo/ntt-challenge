import { FavoriteMovie } from '../../modules/movie/models/FavoriteMovie.entity';

export interface ISkipAndTake {
  take: number;
  skip: number;
}

export interface IGetAllMoviesRequest {
  page?: number;
  perPage?: number;
  filters?: { [key in keyof FavoriteMovie]?: any };
}
