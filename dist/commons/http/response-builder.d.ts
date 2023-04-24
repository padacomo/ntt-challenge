import { Response } from 'express';
export declare const successResponse: <T>(response: Response, result: T) => void;
export declare const emptyResponse: (response: Response) => void;
export declare const createdResponse: (response: Response) => void;
export declare const emptyOrSuccessResponse: <T>(response: Response, result: T) => void;
