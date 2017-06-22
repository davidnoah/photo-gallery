import { RECEIVE_PHOTOS, RECEIVE_ADDITIONAL_PHOTOS, LOADING } from '../actions/photo_actions';
import { extend, merge } from 'lodash';

let initialState = {
  photos: [],
  page: 1,
  isLoading: false
};

const PhotosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PHOTOS:
      let newState = extend({}, state);
      newState.photos = action.photos;
      newState.isLoading = false;
      return newState;
    case RECEIVE_ADDITIONAL_PHOTOS:
      newState = extend({}, state);
      let newPhotos = newState.photos.concat(action.photos);
      newState.photos = newPhotos;
      newState.page += 1;
      newState.isLoading = false;
      return newState;
    case LOADING:
      newState = merge({}, state, {isLoading: true});
      return newState;
    default:
      return state;
  }
};

export default PhotosReducer;
