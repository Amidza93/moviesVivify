import movies from './movies.json';



class MovieService {
  constructor() {
    this.movies = movies;
  }

  getMovies() {
    return this.movies
  }

  addMovie(movie) {
    console.log(movie);
    return this.movies = [...this.movies, movie];

  }

  deleteMovie(movie) { this.movies = this.movies.filter((m) => movie.title !== m.title) }

  rateMovie(num, name) {
    this.movies = this.movies.map((m) => {
      if (m.title === name) {
        m.ratingsCounter += 1;
        m.rating = (num + m.rating) / 2;
      }
      return m;
    });
  }
}

export default new MovieService();


