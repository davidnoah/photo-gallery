import * as APIUtil from '../util/photo_util';

// Action Constants
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_ADDITIONAL_PHOTOS = "RECEIVE_ADDITIONAL_PHOTOS";

// Async Actions
export const fetchPhotos = (query) => dispatch => (
  APIUtil.fetchPhotos(query)
    .then((photos) => dispatch(receivePhotos(photos)))
);

export const requestMorePhotos = (query, page) => dispatch => (
  APIUtil.requestMorePhotos(query, page)
    .then((photos) => dispatch(receiveAdditionalPhotos(photos)))
);

// Sync Actions
export const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receiveAdditionalPhotos = (photos) => ({
  type: RECEIVE_ADDITIONAL_PHOTOS,
  photos
});
