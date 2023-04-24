"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appPipes = void 0;
const common_1 = require("@nestjs/common");
exports.appPipes = [
    new common_1.ValidationPipe({
        stopAtFirstError: true,
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    }),
];
//# sourceMappingURL=app.pipes.js.map