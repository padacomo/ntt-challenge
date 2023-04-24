"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePagination = void 0;
function calculatePagination(page, perPage) {
    return {
        skip: page === 1 ? 0 : page * perPage - perPage,
        take: perPage,
    };
}
exports.calculatePagination = calculatePagination;
//# sourceMappingURL=pagination.js.map