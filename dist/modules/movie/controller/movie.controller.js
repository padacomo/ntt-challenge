"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const routes_constants_1 = require("../constants/routes.constants");
const constants_1 = require("../../../commons/constants");
const swagger_2 = require("../../../infra/swagger");
const get_movie_by_title_1 = require("./contracts/get-movie-by-title");
const response_builder_1 = require("../../../commons/http/response-builder");
const _get_movie_by_title_use_case_interface_1 = require("../use-cases/ get-movie-by-title-use-case.interface");
const contracts_1 = require("./contracts");
const create_favorite_movie_use_case_interface_1 = require("../use-cases/create-favorite-movie-use-case.interface");
const get_favorite_movie_by_id_use_case_interface_1 = require("../use-cases/get-favorite-movie-by-id-use-case.interface");
const get_all_favorite_movies_use_case_interface_1 = require("../use-cases/get-all-favorite-movies-use-case.interface");
const get_all_favorite_movies_1 = require("./contracts/get-all-favorite-movies");
let MovieController = class MovieController {
    constructor(getMovieByTitleUseCase, createFavoriteMovieUseCase, getFavoriteMovieByIdUseCase, getAllFavoriteMoviesUseCase) {
        this.getMovieByTitleUseCase = getMovieByTitleUseCase;
        this.createFavoriteMovieUseCase = createFavoriteMovieUseCase;
        this.getFavoriteMovieByIdUseCase = getFavoriteMovieByIdUseCase;
        this.getAllFavoriteMoviesUseCase = getAllFavoriteMoviesUseCase;
    }
    async getMovieByTitle(query, response) {
        const result = await this.getMovieByTitleUseCase.execute(query);
        (0, response_builder_1.emptyOrSuccessResponse)(response, result);
    }
    async createFavoriteMovie(movie, response) {
        await this.createFavoriteMovieUseCase.execute(movie);
        (0, response_builder_1.createdResponse)(response);
    }
    async getFavoriteMovieById(id, response) {
        const result = await this.getFavoriteMovieByIdUseCase.execute(id);
        (0, response_builder_1.emptyOrSuccessResponse)(response, result);
    }
    async getAllFavoriteMovies(params, response) {
        const result = await this.getAllFavoriteMoviesUseCase.execute(params);
        (0, response_builder_1.emptyOrSuccessResponse)(response, result);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)(constants_1.API_V1),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_movie_by_title_1.GetMovieByTitleRequest, Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovieByTitle", null);
__decorate([
    (0, common_1.Post)(routes_constants_1.PATH_FAVORITE_MOVIE),
    (0, common_1.Version)(constants_1.API_V1),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.CreateFavoriteMovieRequest, Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "createFavoriteMovie", null);
__decorate([
    (0, common_1.Get)(routes_constants_1.GET_FAVORITE_MOVIE_BY_ID),
    (0, common_1.Version)(constants_1.API_V1),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getFavoriteMovieById", null);
__decorate([
    (0, common_1.Get)(routes_constants_1.PATH_FAVORITE_MOVIE),
    (0, common_1.Version)(constants_1.API_V1),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_all_favorite_movies_1.GetAllFavoriteMoiviesRequest, Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getAllFavoriteMovies", null);
MovieController = __decorate([
    (0, swagger_1.ApiTags)(swagger_2.SWAGGER_TITLE),
    (0, common_1.Controller)({
        path: routes_constants_1.PATH_MOVIE,
        version: [constants_1.API_V1],
    }),
    __param(0, (0, common_1.Inject)(_get_movie_by_title_use_case_interface_1.IGetMovieByTitleUseCaseName)),
    __param(1, (0, common_1.Inject)(create_favorite_movie_use_case_interface_1.ICreateFavoriteMovieUseCaseName)),
    __param(2, (0, common_1.Inject)(get_favorite_movie_by_id_use_case_interface_1.IGetFavoriteMovieByIdUseCaseName)),
    __param(3, (0, common_1.Inject)(get_all_favorite_movies_use_case_interface_1.IGetAllFavoriteMoviesCaseName)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map