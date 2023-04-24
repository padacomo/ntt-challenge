import { Response } from 'express';
import { GetMovieByTitleRequest } from './contracts/get-movie-by-title';
import { IGetMovieByTitleUseCase } from '../use-cases/ get-movie-by-title-use-case.interface';
import { CreateFavoriteMovieRequest } from './contracts';
import { ICreateFavoriteMovieUseCase } from '../use-cases/create-favorite-movie-use-case.interface';
import { IGetFavoriteMovieByIdUseCase } from '../use-cases/get-favorite-movie-by-id-use-case.interface';
import { IGetAllFavoriteMoviesUseCase } from '../use-cases/get-all-favorite-movies-use-case.interface';
import { GetAllFavoriteMoiviesRequest } from './contracts/get-all-favorite-movies';
export declare class MovieController {
    private readonly getMovieByTitleUseCase;
    private readonly createFavoriteMovieUseCase;
    private readonly getFavoriteMovieByIdUseCase;
    private readonly getAllFavoriteMoviesUseCase;
    constructor(getMovieByTitleUseCase: IGetMovieByTitleUseCase, createFavoriteMovieUseCase: ICreateFavoriteMovieUseCase, getFavoriteMovieByIdUseCase: IGetFavoriteMovieByIdUseCase, getAllFavoriteMoviesUseCase: IGetAllFavoriteMoviesUseCase);
    getMovieByTitle(query: GetMovieByTitleRequest, response: Response): Promise<void>;
    createFavoriteMovie(movie: CreateFavoriteMovieRequest, response: Response): Promise<void>;
    getFavoriteMovieById(id: number, response: Response): Promise<void>;
    getAllFavoriteMovies(params: GetAllFavoriteMoiviesRequest, response: Response): Promise<void>;
}
