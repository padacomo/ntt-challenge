import { ICheckIsFavoriteMovieResponseDto } from '../dto';
import { ICheckIsFavoriteMovieRequestDto } from '../dto/check-is-favorite-movie.request.dto';

export interface ICheckIsFavoriteMovieUseCase {
  execute(
    data: ICheckIsFavoriteMovieRequestDto,
  ): Promise<ICheckIsFavoriteMovieResponseDto>;
}

export const ICheckIsFavoriteMovieUseCaseName = 'ICheckIsFavoriteMovieUseCase';
