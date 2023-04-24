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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const get_movie_by_title_error_1 = require("../error/get-movie-by-title.error");
const constants_1 = require("../../http/constants");
const api_constants_1 = require("../constants/api.constants");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const FavoriteMovie_entity_1 = require("../models/FavoriteMovie.entity");
const paginate_1 = require("../../../commons/paginate");
(0, common_1.Injectable)();
let MovieService = class MovieService {
    constructor(httpService, repository) {
        this.httpService = httpService;
        this.repository = repository;
    }
    async getMovie({ title, }) {
        try {
            const url = api_constants_1.api.getMovieByTitle(title);
            const { data } = await this.httpService.get(url);
            return data;
        }
        catch (error) {
            console.log('Error ao consultar filme na OMDb API', error);
            throw new get_movie_by_title_error_1.GetMovieByTitleError();
        }
    }
    async createFavoriteMovie(movie) {
        return this.repository.save(movie);
    }
    async getFavoriteMovie(id) {
        return this.repository.findOneBy({ id });
    }
    async getAllFavoriteMovies(params) {
        let filters = null;
        const page = Number(params.page) || 1;
        const perPage = Number(params.perPage) || 10;
        const options = (0, paginate_1.calculatePagination)(page, perPage);
        if (params.filters)
            filters = params.filters;
        const total = await this.repository.count({ where: Object.assign({}, filters) });
        const items = await this.repository.find(Object.assign(Object.assign({}, options), { where: Object.assign({}, filters) }));
        return {
            total,
            lastPage: Math.ceil(total / perPage),
            currentPage: page,
            currentPerPage: perPage,
            items,
        };
    }
};
MovieService = __decorate([
    __param(0, (0, common_1.Inject)(constants_1.HTTP_SERVICE)),
    __param(1, (0, typeorm_1.InjectRepository)(FavoriteMovie_entity_1.FavoriteMovie)),
    __metadata("design:paramtypes", [Object, typeorm_2.Repository])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map