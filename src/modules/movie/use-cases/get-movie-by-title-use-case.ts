import { Inject, Injectable } from '@nestjs/common';
import { IGetMovieByTitleUseCase } from './ get-movie-by-title-use-case.interface';
import { IGetMovieByTitleRequestDto } from '../dto';
import { IGetMovieByTitleResponseDto } from '../dto/get-movie-by-title.response.dto';
import {
  IMovieService,
  IMovieServiceName,
} from '../services/movie.service.interface';

@Injectable()
export class GetMovieByTitleUseCase implements IGetMovieByTitleUseCase {
  constructor(
    @Inject(IMovieServiceName)
    private readonly movieService: IMovieService,
  ) {}

  async execute(
    data: IGetMovieByTitleRequestDto,
  ): Promise<IGetMovieByTitleResponseDto> {
    return this.movieService.getMovie(data);
  }
}
