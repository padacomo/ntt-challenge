import { IGetMovieByTitleUseCase } from './ get-movie-by-title-use-case.interface';
import { IGetMovieByTitleRequestDto } from '../dto';
import { IGetMovieByTitleResponseDto } from '../dto/get-movie-by-title.response.dto';
import { IMovieService } from '../services/movie.service.interface';
export declare class GetMovieByTitleUseCase implements IGetMovieByTitleUseCase {
    private readonly movieService;
    constructor(movieService: IMovieService);
    execute(data: IGetMovieByTitleRequestDto): Promise<IGetMovieByTitleResponseDto>;
}
