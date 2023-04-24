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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteMovie = void 0;
const typeorm_1 = require("typeorm");
let FavoriteMovie = class FavoriteMovie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FavoriteMovie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FavoriteMovie.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FavoriteMovie.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FavoriteMovie.prototype, "director", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FavoriteMovie.prototype, "writer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FavoriteMovie.prototype, "plot", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FavoriteMovie.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FavoriteMovie.prototype, "external_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FavoriteMovie.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], FavoriteMovie.prototype, "createdAt", void 0);
FavoriteMovie = __decorate([
    (0, typeorm_1.Entity)({ name: 'favorite_movies' })
], FavoriteMovie);
exports.FavoriteMovie = FavoriteMovie;
//# sourceMappingURL=FavoriteMovie.entity.js.map