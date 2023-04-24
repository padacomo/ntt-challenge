import { IMovieService } from '../services/movie.service.interface';
import { ICreateFavoriteMovieRequestDto } from '../dto/create-favorite-movie.request.dto';
import { ICreateFavoriteMovieResponseDto } from '../dto/create-favorite-movie.response.dtos';
import { ICreateFavoriteMovieUseCase } from './create-favorite-movie-use-case.interface';
export declare class CreateFavoriteMovieUseCase implements ICreateFavoriteMovieUseCase {
    private readonly movieService;
    constructor(movieService: IMovieService);
    execute(movie: ICreateFavoriteMovieRequestDto): Promise<ICreateFavoriteMovieResponseDto>;
}
