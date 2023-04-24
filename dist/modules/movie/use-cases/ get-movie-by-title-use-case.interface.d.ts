import { IGetMovieByTitleRequestDto } from '../dto';
import { IGetMovieByTitleResponseDto } from '../dto/get-movie-by-title.response.dto';
export interface IGetMovieByTitleUseCase {
    execute(data: IGetMovieByTitleRequestDto): Promise<IGetMovieByTitleResponseDto>;
}
export declare const IGetMovieByTitleUseCaseName = "IGetMovieByTitleUseCase";
