import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpStatus,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Response } from 'express';
import { DefaultError } from '../error';
import {
  FORBIDDEN_MESSAGE,
  MESSAGE_FIELD,
  UNAUTHORIZED_MESSAGE,
} from './exception.constants';

interface ErrorResponse {
  status: number;
  message: string;
}

@Catch()
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const res = context.getResponse<Response>();

    const errorResponse = this.buildErrorResponse(exception);

    res.status(errorResponse.status);
    res.json({ message: errorResponse.message });
  }

  private buildErrorResponse(exception: Error): ErrorResponse {
    if (exception instanceof DefaultError) {
      return {
        status: exception.getStatus(),
        message: exception.message,
      };
    }

    if (exception instanceof UnprocessableEntityException) {
      return {
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        message: exception.getResponse()[MESSAGE_FIELD][0],
      };
    }

    if (exception instanceof UnauthorizedException) {
      return {
        status: exception.getStatus(),
        message: UNAUTHORIZED_MESSAGE,
      };
    }

    if (exception instanceof ForbiddenException) {
      return {
        status: exception.getStatus(),
        message: FORBIDDEN_MESSAGE,
      };
    }

    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: exception.message,
    };
  }
}
