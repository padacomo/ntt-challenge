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
exports.CreateFavoriteMovieRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateFavoriteMovieRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'title is required' }),
    (0, class_validator_1.IsString)({ message: 'title must be a string' }),
    __metadata("design:type", String)
], CreateFavoriteMovieRequest.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'genre is required' }),
    (0, class_validator_1.IsString)({ message: 'genre must be a string' }),
    __metadata("design:type", String)
], CreateFavoriteMovieRequest.prototype, "genre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'director is required' }),
    (0, class_validator_1.IsString)({ message: 'director must be a string' }),
    __metadata("design:type", String)
], CreateFavoriteMovieRequest.prototype, "director", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'writer is required' }),
    (0, class_validator_1.IsString)({ message: 'writer must be a string' }),
    __metadata("design:type", String)
], CreateFavoriteMovieRequest.prototype, "writer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'plot is required' }),
    (0, class_validator_1.IsString)({ message: 'plot must be a string' }),
    __metadata("design:type", String)
], CreateFavoriteMovieRequest.prototype, "plot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'language is required' }),
    (0, class_validator_1.IsString)({ message: 'language must be a string' }),
    __metadata("design:type", String)
], CreateFavoriteMovieRequest.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'external_id is required' }),
    (0, class_validator_1.IsString)({ message: 'external_id must be a string' }),
    __metadata("design:type", String)
], CreateFavoriteMovieRequest.prototype, "external_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'type is required' }),
    (0, class_validator_1.IsString)({ message: 'type must be a string' }),
    __metadata("design:type", String)
], CreateFavoriteMovieRequest.prototype, "type", void 0);
exports.CreateFavoriteMovieRequest = CreateFavoriteMovieRequest;
//# sourceMappingURL=create-favorite-movie.js.map