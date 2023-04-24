import { ICreateFavoriteMovieRequestDto } from '../dto/create-favorite-movie.request.dto';
import { ICreateFavoriteMovieResponseDto } from '../dto/create-favorite-movie.response.dtos';
export interface ICreateFavoriteMovieUseCase {
    execute(movie: ICreateFavoriteMovieRequestDto): Promise<ICreateFavoriteMovieResponseDto>;
}
export declare const ICreateFavoriteMovieUseCaseName = "ICreateFavoriteMovieUseCase";
