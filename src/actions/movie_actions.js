import * as MovieAPIUtil from "../util/movie_api_util";

export const RECEIVE_MOVIES = "RECEIVE_POSTS";
export const RECEIVE_MOVIE = "RECEIVE_POST";
export const REMOVE_MOVIE = "REMOVE_POST";

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
})

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
})

export const removeMovie = movie => ({
  type: REMOVE_MOVIE,
  movie
})

export const recieveMovieErrors = errors => ({
  type: RECEIVE_MOVIE_ERRORS,
  errors
})

export const requestMovies = (page) => dispatch => (
  MovieAPIUtil.fetchMovies(page)
  .then(movies => dispatch(receiveMovies(movies)))
  .catch(err => dispatch(recieveMovieErrors(err)))
)