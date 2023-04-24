import { DefaultError } from '../../../commons/error';

export class GetMovieByTitleError extends DefaultError {
  constructor() {
    super('Erro ao consultar filme por título');
  }
}
