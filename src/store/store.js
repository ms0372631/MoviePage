import { applyMiddleware, configureStore} from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/root_reducers";


const store = (preloadedState = {}) => (
  configureStore(rootReducer, preloadedState, applyMiddleware(thunk))
);

export default store;