import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class AppExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
    private buildErrorResponse;
}
