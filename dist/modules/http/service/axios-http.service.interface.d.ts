export interface IHttpService {
    post(url: string, body: any, config?: any): Promise<any>;
    get(url: string, config?: any): Promise<any>;
}
