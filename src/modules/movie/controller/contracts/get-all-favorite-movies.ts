import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class GetAllFavoriteMoiviesRequest {
  @ApiProperty()
  @IsOptional()
  page?: number;

  @ApiProperty()
  @IsOptional()
  perPage?: number;

  @ApiProperty()
  @IsOptional()
  filters?: any;
}
