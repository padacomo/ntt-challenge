"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const error_1 = require("../error");
const exception_constants_1 = require("./exception.constants");
let AppExceptionFilter = class AppExceptionFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const res = context.getResponse();
        const errorResponse = this.buildErrorResponse(exception);
        res.status(errorResponse.status);
        res.json({ message: errorResponse.message });
    }
    buildErrorResponse(exception) {
        if (exception instanceof error_1.DefaultError) {
            return {
                status: exception.getStatus(),
                message: exception.message,
            };
        }
        if (exception instanceof common_1.UnprocessableEntityException) {
            return {
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                message: exception.getResponse()[exception_constants_1.MESSAGE_FIELD][0],
            };
        }
        if (exception instanceof common_1.UnauthorizedException) {
            return {
                status: exception.getStatus(),
                message: exception_constants_1.UNAUTHORIZED_MESSAGE,
            };
        }
        if (exception instanceof common_1.ForbiddenException) {
            return {
                status: exception.getStatus(),
                message: exception_constants_1.FORBIDDEN_MESSAGE,
            };
        }
        return {
            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            message: exception.message,
        };
    }
};
AppExceptionFilter = __decorate([
    (0, common_1.Catch)()
], AppExceptionFilter);
exports.AppExceptionFilter = AppExceptionFilter;
//# sourceMappingURL=exception.filter.js.map