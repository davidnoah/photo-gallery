import { RECEIVE_PHOTOS, RECEIVE_ADDITIONAL_PHOTOS } from '../actions/photo_actions';
import { extend, merge } from 'lodash';

let initialState = {
  photos: [],
  page: 1
};

const PhotosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PHOTOS:
      let newState = extend({}, state);
      newState.photos = action.photos;
      return newState;
    case RECEIVE_ADDITIONAL_PHOTOS:
      newState = extend({}, state);
      let newPhotos = newState.photos.concat(action.photos);
      newState.photos = newPhotos;
      newState.page += 1;
      return newState;
    default:
      return state;
  }
};

export default PhotosReducer;
