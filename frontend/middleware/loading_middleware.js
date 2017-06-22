import { loading } from '../actions/photo_actions';

const loadingMiddleware = state => next => action => {
  if (action.type === "RECEIVE_PHOTOS" || action.type === "RECEIVE_ADDITIONAL_PHOTOS") {
    state.dispatch(loading());
  }
  return next(action);
};

export default loadingMiddleware;
