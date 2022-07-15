import { combineReducers } from "redux";
import moviesReducer from "./movie_reducer";
import likesReducer from "./like_reducer";
import blocksReducer from "./block_reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  likes: likesReducer,
  blocks: blocksReducer
});

export default rootReducer;
