import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
  Res,
  Version,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response, query } from 'express';
import {
  GET_FAVORITE_MOVIE_BY_ID,
  PATH_FAVORITE_MOVIE,
  PATH_MOVIE,
} from '../constants/routes.constants';
import { API_V1 } from '../../../commons/constants';
import { SWAGGER_TITLE } from 'src/infra/swagger';
import { GetMovieByTitleRequest } from './contracts/get-movie-by-title';
import {
  createdResponse,
  emptyOrSuccessResponse,
} from '../../../commons/http/response-builder';
import {
  IGetMovieByTitleUseCase,
  IGetMovieByTitleUseCaseName,
} from '../use-cases/ get-movie-by-title-use-case.interface';
import { CreateFavoriteMovieRequest } from './contracts';
import {
  ICreateFavoriteMovieUseCase,
  ICreateFavoriteMovieUseCaseName,
} from '../use-cases/create-favorite-movie-use-case.interface';
import {
  IGetFavoriteMovieByIdUseCase,
  IGetFavoriteMovieByIdUseCaseName,
} from '../use-cases/get-favorite-movie-by-id-use-case.interface';
import {
  IGetAllFavoriteMoviesCaseName,
  IGetAllFavoriteMoviesUseCase,
} from '../use-cases/get-all-favorite-movies-use-case.interface';
import { GetAllFavoriteMoiviesRequest } from './contracts/get-all-favorite-movies';

@ApiTags(SWAGGER_TITLE)
@Controller({
  path: PATH_MOVIE,
  version: [API_V1],
})
export class MovieController {
  constructor(
    @Inject(IGetMovieByTitleUseCaseName)
    private readonly getMovieByTitleUseCase: IGetMovieByTitleUseCase,

    @Inject(ICreateFavoriteMovieUseCaseName)
    private readonly createFavoriteMovieUseCase: ICreateFavoriteMovieUseCase,

    @Inject(IGetFavoriteMovieByIdUseCaseName)
    private readonly getFavoriteMovieByIdUseCase: IGetFavoriteMovieByIdUseCase,

    @Inject(IGetAllFavoriteMoviesCaseName)
    private readonly getAllFavoriteMoviesUseCase: IGetAllFavoriteMoviesUseCase,
  ) {}

  @Get()
  @Version(API_V1)
  async getMovieByTitle(
    @Query() query: GetMovieByTitleRequest,
    @Res() response: Response,
  ) {
    const result = await this.getMovieByTitleUseCase.execute(query);
    emptyOrSuccessResponse(response, result);
  }

  @Post(PATH_FAVORITE_MOVIE)
  @Version(API_V1)
  async createFavoriteMovie(
    @Body() movie: CreateFavoriteMovieRequest,
    @Res() response: Response,
  ) {
    await this.createFavoriteMovieUseCase.execute(movie);
    createdResponse(response);
  }

  @Get(GET_FAVORITE_MOVIE_BY_ID)
  @Version(API_V1)
  async getFavoriteMovieById(
    @Param('id') id: number,
    @Res() response: Response,
  ) {
    const result = await this.getFavoriteMovieByIdUseCase.execute(id);
    emptyOrSuccessResponse(response, result);
  }

  @Get(PATH_FAVORITE_MOVIE)
  @Version(API_V1)
  async getAllFavoriteMovies(
    @Query() params: GetAllFavoriteMoiviesRequest,
    @Res() response: Response,
  ) {
    const result = await this.getAllFavoriteMoviesUseCase.execute(params);
    emptyOrSuccessResponse(response, result);
  }
}
