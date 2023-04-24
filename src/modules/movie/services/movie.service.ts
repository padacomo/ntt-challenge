import { Inject, Injectable } from '@nestjs/common';
import { IGetMovieByTitleRequestDto } from '../dto';
import { IGetMovieByTitleResponseDto } from '../dto/get-movie-by-title.response.dto';
import { GetMovieByTitleError } from '../error/get-movie-by-title.error';
import { IMovieService } from './movie.service.interface';
import { HTTP_SERVICE } from '../../http/constants';
import { IHttpService } from 'src/modules/http/service/axios-http.service.interface';
import { api } from '../constants/api.constants';
import { ICreateFavoriteMovieRequestDto } from '../dto/create-favorite-movie.request.dto';
import { ICreateFavoriteMovieResponseDto } from '../dto/create-favorite-movie.response.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoriteMovie } from '../models/FavoriteMovie.entity';
import { IGetFavoriteMovieByIdResponseDto } from '../dto/get-favorite-movie-by-id.response.dto';
import {
  IGetAllMoviesRequest,
  calculatePagination,
} from 'src/commons/paginate';
import { PaginationResponseType } from 'src/commons/paginate/type/pagination.response.type';

Injectable();
export class MovieService implements IMovieService {
  constructor(
    @Inject(HTTP_SERVICE)
    private readonly httpService: IHttpService,
    @InjectRepository(FavoriteMovie)
    private readonly repository: Repository<FavoriteMovie>,
  ) {}

  async getMovie({
    title,
  }: IGetMovieByTitleRequestDto): Promise<IGetMovieByTitleResponseDto> {
    try {
      const url = api.getMovieByTitle(title);
      const { data } = await this.httpService.get(url);
      return data;
    } catch (error: any) {
      console.log('Error ao consultar filme na OMDb API', error);
      throw new GetMovieByTitleError();
    }
  }

  async createFavoriteMovie(
    movie: ICreateFavoriteMovieRequestDto,
  ): Promise<ICreateFavoriteMovieResponseDto> {
    return this.repository.save(movie);
  }

  async getFavoriteMovie(
    id: number,
  ): Promise<IGetFavoriteMovieByIdResponseDto> {
    return this.repository.findOneBy({ id });
  }

  async getAllFavoriteMovies(
    params: IGetAllMoviesRequest,
  ): Promise<PaginationResponseType<FavoriteMovie>> {
    let filters = null;

    const page = Number(params.page) || 1;
    const perPage = Number(params.perPage) || 10;
    const options = calculatePagination(page, perPage);

    if (params.filters) filters = params.filters;
    const total = await this.repository.count({ where: { ...filters } });
    const items = await this.repository.find({
      ...options,
      where: { ...filters },
    });

    return {
      total,
      lastPage: Math.ceil(total / perPage),
      currentPage: page,
      currentPerPage: perPage,
      items,
    };
  }
}
