import { HttpModule } from '@nestjs/axios';
import { HTTP_SERVICE } from './constants';
import { AxiosHttpService } from './service/axios-http.service';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [
    {
      provide: HTTP_SERVICE,
      useClass: AxiosHttpService,
    },
  ],
  exports: [
    {
      provide: HTTP_SERVICE,
      useClass: AxiosHttpService,
    },
  ],
})
export class AxiosHttpModule {}
