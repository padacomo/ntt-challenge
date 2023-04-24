import { FavoriteMovie } from '../models/FavoriteMovie.entity';

export interface ICheckIsFavoriteMovieResponseDto {
  favorite: boolean;
  movie?: FavoriteMovie;
}
