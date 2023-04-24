const baseUrl = 'http://www.omdbapi.com'; //TODO: implements env
const apiKey = '9590cfa4'; //TODO: implements env

export const api = {
  getMovieByTitle: (title: string) => `${baseUrl}/?t=${title}&apiKey=${apiKey}`,
};
