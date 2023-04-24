import axios from 'axios';
import { IHttpService } from './axios-http.service.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosHttpService implements IHttpService {
  private http: any;
  constructor() {
    this.http = axios.create();
  }

  post(url: string, body: any, config?: any): Promise<any> {
    return this.http.post(url, body, config);
  }
  get(url: string, config?: any): Promise<any> {
    return this.http.get(url, config);
  }
}
