import { IGetFavoriteMovieByIdUseCase } from './get-favorite-movie-by-id-use-case.interface';
import { IMovieService } from '../services/movie.service.interface';
import { IGetFavoriteMovieByIdResponseDto } from '../dto/get-favorite-movie-by-id.response.dto';
export declare class GetFavoriteMovieByIdUseCase implements IGetFavoriteMovieByIdUseCase {
    private readonly movieService;
    constructor(movieService: IMovieService);
    execute(id: number): Promise<IGetFavoriteMovieByIdResponseDto>;
}
