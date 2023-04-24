import { ICreateFavoriteMovieRequestDto } from '../../dto/create-favorite-movie.request.dto';
export declare class CreateFavoriteMovieRequest implements ICreateFavoriteMovieRequestDto {
    title: string;
    genre: string;
    director: string;
    writer: string;
    plot: string;
    language: string;
    external_id: string;
    type: string;
}
