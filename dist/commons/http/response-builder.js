"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyOrSuccessResponse = exports.createdResponse = exports.emptyResponse = exports.successResponse = void 0;
const common_1 = require("@nestjs/common");
const successResponse = (response, result) => {
    response.status(common_1.HttpStatus.OK);
    if (result['Error'])
        response.json({ message: 'Não encontramos o filme' });
    response.json(result);
};
exports.successResponse = successResponse;
const emptyResponse = (response) => {
    response.status(common_1.HttpStatus.NO_CONTENT);
    response.end();
};
exports.emptyResponse = emptyResponse;
const createdResponse = (response) => {
    response.status(common_1.HttpStatus.CREATED);
    response.end();
};
exports.createdResponse = createdResponse;
const emptyOrSuccessResponse = (response, result) => {
    if (result) {
        (0, exports.successResponse)(response, result);
        return;
    }
    (0, exports.emptyResponse)(response);
};
exports.emptyOrSuccessResponse = emptyOrSuccessResponse;
//# sourceMappingURL=response-builder.js.map