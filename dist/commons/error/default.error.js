"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultError = void 0;
const common_1 = require("@nestjs/common");
class DefaultError extends common_1.HttpException {
    constructor(message, status = common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
        super(message, status);
    }
}
exports.DefaultError = DefaultError;
//# sourceMappingURL=default.error.js.map