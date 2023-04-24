"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const movie_providers_1 = require("./movie.providers");
const movie_controller_1 = require("./controller/movie.controller");
const axios_1 = require("@nestjs/axios");
const FavoriteMovie_entity_1 = require("./models/FavoriteMovie.entity");
const typeorm_1 = require("@nestjs/typeorm");
let MovieModule = class MovieModule {
};
MovieModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([FavoriteMovie_entity_1.FavoriteMovie]),
        ],
        providers: movie_providers_1.movieProviders,
        controllers: [movie_controller_1.MovieController],
    })
], MovieModule);
exports.MovieModule = MovieModule;
//# sourceMappingURL=movie.module.js.map