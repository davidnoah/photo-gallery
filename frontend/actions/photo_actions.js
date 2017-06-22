import * as APIUtil from '../util/photo_util';

// Action Constants
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

// Async Actions
export const fetchPhotos = (query) => dispatch => {
  APIUtil.fetchPhotos(query)
    .then((photos) => dispatch(receivePhotos(photos)));
};

// Sync Actions
export const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});
