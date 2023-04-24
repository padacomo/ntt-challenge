import { IGetAllMoviesRequest } from 'src/commons/paginate';
import { IGetMovieByTitleRequestDto } from '../dto';
import { ICreateFavoriteMovieRequestDto } from '../dto/create-favorite-movie.request.dto';
import { ICreateFavoriteMovieResponseDto } from '../dto/create-favorite-movie.response.dtos';
import { IGetFavoriteMovieByIdResponseDto } from '../dto/get-favorite-movie-by-id.response.dto';
import { IGetMovieByTitleResponseDto } from '../dto/get-movie-by-title.response.dto';
import { PaginationResponseType } from 'src/commons/paginate/type/pagination.response.type';
import { FavoriteMovie } from '../models/FavoriteMovie.entity';
export interface IMovieService {
    getMovie(data: IGetMovieByTitleRequestDto): Promise<IGetMovieByTitleResponseDto>;
    createFavoriteMovie(movie: ICreateFavoriteMovieRequestDto): Promise<ICreateFavoriteMovieResponseDto>;
    getFavoriteMovie(id: number): Promise<IGetFavoriteMovieByIdResponseDto>;
    getAllFavoriteMovies(params: IGetAllMoviesRequest): Promise<PaginationResponseType<FavoriteMovie>>;
}
export declare const IMovieServiceName = "IMovieService";
