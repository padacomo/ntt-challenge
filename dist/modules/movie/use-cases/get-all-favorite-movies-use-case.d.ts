import { IGetAllFavoriteMoviesUseCase } from './get-all-favorite-movies-use-case.interface';
import { IMovieService } from '../services/movie.service.interface';
import { IGetAllMoviesRequest } from 'src/commons/paginate';
import { PaginationResponseType } from 'src/commons/paginate/type/pagination.response.type';
import { FavoriteMovie } from '../models/FavoriteMovie.entity';
export declare class GetAllFavoriteMoiviesUseCase implements IGetAllFavoriteMoviesUseCase {
    private readonly movieService;
    constructor(movieService: IMovieService);
    execute(params: IGetAllMoviesRequest): Promise<PaginationResponseType<FavoriteMovie>>;
}
