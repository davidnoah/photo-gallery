import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';
import thunk from 'redux-thunk';
import loadingMiddleware from './middleware/loading_middleware';

const configureStore = createStore(
  rootReducer,
  applyMiddleware(thunk, loadingMiddleware)
);

export default configureStore;
