import { IGetMovieByTitleRequestDto } from '../dto';
import { IGetMovieByTitleResponseDto } from '../dto/get-movie-by-title.response.dto';
import { IMovieService } from './movie.service.interface';
import { IHttpService } from 'src/modules/http/service/axios-http.service.interface';
import { ICreateFavoriteMovieRequestDto } from '../dto/create-favorite-movie.request.dto';
import { ICreateFavoriteMovieResponseDto } from '../dto/create-favorite-movie.response.dtos';
import { Repository } from 'typeorm';
import { FavoriteMovie } from '../models/FavoriteMovie.entity';
import { IGetFavoriteMovieByIdResponseDto } from '../dto/get-favorite-movie-by-id.response.dto';
import { IGetAllMoviesRequest } from 'src/commons/paginate';
import { PaginationResponseType } from 'src/commons/paginate/type/pagination.response.type';
export declare class MovieService implements IMovieService {
    private readonly httpService;
    private readonly repository;
    constructor(httpService: IHttpService, repository: Repository<FavoriteMovie>);
    getMovie({ title, }: IGetMovieByTitleRequestDto): Promise<IGetMovieByTitleResponseDto>;
    createFavoriteMovie(movie: ICreateFavoriteMovieRequestDto): Promise<ICreateFavoriteMovieResponseDto>;
    getFavoriteMovie(id: number): Promise<IGetFavoriteMovieByIdResponseDto>;
    getAllFavoriteMovies(params: IGetAllMoviesRequest): Promise<PaginationResponseType<FavoriteMovie>>;
}
