import { RECEIVE_MOVIES, RECEIVE_MOVIE, REMOVE_MOVIE } from "../actions/movie_actions";

const moviesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_MOVIES:
      return action.movies;
    case RECEIVE_MOVIE:
      nextState[action.movie.id] = action.movie;
    case REMOVE_MOVIE:
      delete nextState[action.movie.id];
      return nextState;
    default:
      return state;
  }
};

export default moviesReducer;