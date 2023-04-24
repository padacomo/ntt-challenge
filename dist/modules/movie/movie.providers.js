"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieProviders = exports.useCases = exports.services = void 0;
const _get_movie_by_title_use_case_interface_1 = require("./use-cases/ get-movie-by-title-use-case.interface");
const get_movie_by_title_use_case_1 = require("./use-cases/get-movie-by-title-use-case");
const movie_service_interface_1 = require("./services/movie.service.interface");
const movie_service_1 = require("./services/movie.service");
const constants_1 = require("../http/constants");
const axios_http_service_1 = require("../http/service/axios-http.service");
const create_favorite_movie_use_case_interface_1 = require("./use-cases/create-favorite-movie-use-case.interface");
const create_favorite_movite_use_case_1 = require("./use-cases/create-favorite-movite-use-case");
const get_favorite_movie_by_id_use_case_interface_1 = require("./use-cases/get-favorite-movie-by-id-use-case.interface");
const get_favorite_movie_by_id_use_case_1 = require("./use-cases/get-favorite-movie-by-id-use-case");
const get_all_favorite_movies_use_case_interface_1 = require("./use-cases/get-all-favorite-movies-use-case.interface");
const get_all_favorite_movies_use_case_1 = require("./use-cases/get-all-favorite-movies-use-case");
exports.services = [
    {
        provide: movie_service_interface_1.IMovieServiceName,
        useClass: movie_service_1.MovieService,
    },
    {
        provide: constants_1.HTTP_SERVICE,
        useClass: axios_http_service_1.AxiosHttpService,
    },
];
exports.useCases = [
    {
        provide: _get_movie_by_title_use_case_interface_1.IGetMovieByTitleUseCaseName,
        useClass: get_movie_by_title_use_case_1.GetMovieByTitleUseCase,
    },
    {
        provide: create_favorite_movie_use_case_interface_1.ICreateFavoriteMovieUseCaseName,
        useClass: create_favorite_movite_use_case_1.CreateFavoriteMovieUseCase,
    },
    {
        provide: get_favorite_movie_by_id_use_case_interface_1.IGetFavoriteMovieByIdUseCaseName,
        useClass: get_favorite_movie_by_id_use_case_1.GetFavoriteMovieByIdUseCase,
    },
    {
        provide: get_all_favorite_movies_use_case_interface_1.IGetAllFavoriteMoviesCaseName,
        useClass: get_all_favorite_movies_use_case_1.GetAllFavoriteMoiviesUseCase,
    },
];
exports.movieProviders = [...exports.services, ...exports.useCases];
//# sourceMappingURL=movie.providers.js.map