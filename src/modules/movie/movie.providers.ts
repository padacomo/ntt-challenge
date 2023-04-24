import { Provider } from '@nestjs/common';
import { IGetMovieByTitleUseCaseName } from './use-cases/ get-movie-by-title-use-case.interface';
import { GetMovieByTitleUseCase } from './use-cases/get-movie-by-title-use-case';
import { IMovieServiceName } from './services/movie.service.interface';
import { MovieService } from './services/movie.service';
import { HTTP_SERVICE } from '../http/constants';
import { AxiosHttpService } from '../http/service/axios-http.service';
import { ICreateFavoriteMovieUseCaseName } from './use-cases/create-favorite-movie-use-case.interface';
import { CreateFavoriteMovieUseCase } from './use-cases/create-favorite-movite-use-case';
import { IGetFavoriteMovieByIdUseCaseName } from './use-cases/get-favorite-movie-by-id-use-case.interface';
import { GetFavoriteMovieByIdUseCase } from './use-cases/get-favorite-movie-by-id-use-case';
import { IGetAllFavoriteMoviesCaseName } from './use-cases/get-all-favorite-movies-use-case.interface';
import { GetAllFavoriteMoiviesUseCase } from './use-cases/get-all-favorite-movies-use-case';
import { ICheckIsFavoriteMovieUseCaseName } from './use-cases/check-is-favorite-movie-use-case.interface';
import { CheckIsFavoriteMovieUseCase } from './use-cases/check-is-favorite-movie-use-case';

export const services: Provider<any>[] = [
  {
    provide: IMovieServiceName,
    useClass: MovieService,
  },
  {
    provide: HTTP_SERVICE,
    useClass: AxiosHttpService,
  },
];

export const useCases: Provider<any>[] = [
  {
    provide: IGetMovieByTitleUseCaseName,
    useClass: GetMovieByTitleUseCase,
  },
  {
    provide: ICreateFavoriteMovieUseCaseName,
    useClass: CreateFavoriteMovieUseCase,
  },
  {
    provide: IGetFavoriteMovieByIdUseCaseName,
    useClass: GetFavoriteMovieByIdUseCase,
  },
  {
    provide: IGetAllFavoriteMoviesCaseName,
    useClass: GetAllFavoriteMoiviesUseCase,
  },
  {
    provide: ICheckIsFavoriteMovieUseCaseName,
    useClass: CheckIsFavoriteMovieUseCase,
  },
];
export const movieProviders: Provider<any>[] = [...services, ...useCases];
