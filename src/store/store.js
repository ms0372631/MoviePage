import { applyMiddleware, configureStore} from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import entitiesReducer from "../reducers/root_reducers";

const configureStore = (preloaded = {}) => (
  configureStore(rootRuducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;