"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const baseUrl = 'http://www.omdbapi.com';
const apiKey = '9590cfa4';
exports.api = {
    getMovieByTitle: (title) => `${baseUrl}/?t=${title}&apiKey=${apiKey}`,
};
//# sourceMappingURL=api.constants.js.map