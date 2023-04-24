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
exports.GetAllFavoriteMoiviesUseCase = void 0;
const common_1 = require("@nestjs/common");
const movie_service_interface_1 = require("../services/movie.service.interface");
let GetAllFavoriteMoiviesUseCase = class GetAllFavoriteMoiviesUseCase {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async execute(params) {
        return this.movieService.getAllFavoriteMovies(params);
    }
};
GetAllFavoriteMoiviesUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(movie_service_interface_1.IMovieServiceName)),
    __metadata("design:paramtypes", [Object])
], GetAllFavoriteMoiviesUseCase);
exports.GetAllFavoriteMoiviesUseCase = GetAllFavoriteMoiviesUseCase;
//# sourceMappingURL=get-all-favorite-movies-use-case.js.map