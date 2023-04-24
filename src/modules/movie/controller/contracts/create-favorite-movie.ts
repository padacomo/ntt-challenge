import { ApiProperty } from '@nestjs/swagger';
import { ICreateFavoriteMovieRequestDto } from '../../dto/create-favorite-movie.request.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFavoriteMovieRequest
  implements ICreateFavoriteMovieRequestDto
{
  @ApiProperty()
  @IsNotEmpty({ message: 'title is required' })
  @IsString({ message: 'title must be a string' })
  title: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'genre is required' })
  @IsString({ message: 'genre must be a string' })
  genre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'director is required' })
  @IsString({ message: 'director must be a string' })
  director: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'writer is required' })
  @IsString({ message: 'writer must be a string' })
  writer: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'plot is required' })
  @IsString({ message: 'plot must be a string' })
  plot: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'language is required' })
  @IsString({ message: 'language must be a string' })
  language: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'external_id is required' })
  @IsString({ message: 'external_id must be a string' })
  external_id: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'type is required' })
  @IsString({ message: 'type must be a string' })
  type: string;
}
