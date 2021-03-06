import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux';
import rootReducer from "../reducers/root_reducers";
import logger from "redux-logger";
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore