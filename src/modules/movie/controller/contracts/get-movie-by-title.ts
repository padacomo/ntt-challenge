import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { IGetMovieByTitleRequestDto } from '../../dto';

export class GetMovieByTitleRequest implements IGetMovieByTitleRequestDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'title is required' })
  @IsString({ message: 'title must be a string' })
  title: string;
}
