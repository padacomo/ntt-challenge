import { IGetFavoriteMovieByIdResponseDto } from '../dto/get-favorite-movie-by-id.response.dto';
export interface IGetFavoriteMovieByIdUseCase {
    execute(id: number): Promise<IGetFavoriteMovieByIdResponseDto>;
}
export declare const IGetFavoriteMovieByIdUseCaseName = "IGetFavoriteMovieByIdUseCase";
