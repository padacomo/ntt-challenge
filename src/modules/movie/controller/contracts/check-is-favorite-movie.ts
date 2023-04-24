import { ApiProperty } from '@nestjs/swagger';
import { ICheckIsFavoriteMovieRequestDto } from '../../dto/check-is-favorite-movie.request.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class CheckIsFavoriteMovieRequest
  implements ICheckIsFavoriteMovieRequestDto
{
  @ApiProperty()
  @IsNotEmpty({ message: 'externalId is required' })
  @IsString({ message: 'externalId must be a string' })
  externalId: string;
}
