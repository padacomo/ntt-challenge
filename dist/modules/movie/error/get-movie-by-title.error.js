"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMovieByTitleError = void 0;
const error_1 = require("../../../commons/error");
class GetMovieByTitleError extends error_1.DefaultError {
    constructor() {
        super('Erro ao consultar filme por título');
    }
}
exports.GetMovieByTitleError = GetMovieByTitleError;
//# sourceMappingURL=get-movie-by-title.error.js.map