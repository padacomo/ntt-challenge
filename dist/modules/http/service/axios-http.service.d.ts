import { IHttpService } from './axios-http.service.interface';
export declare class AxiosHttpService implements IHttpService {
    private http;
    constructor();
    post(url: string, body: any, config?: any): Promise<any>;
    get(url: string, config?: any): Promise<any>;
}
