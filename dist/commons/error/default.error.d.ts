import { HttpException, HttpStatus } from '@nestjs/common';
export declare abstract class DefaultError extends HttpException {
    constructor(message: string, status?: HttpStatus);
}
