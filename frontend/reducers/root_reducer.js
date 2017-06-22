import { combineReducers } from 'redux';
import PhotosReducer from './photos_reducer';

export default combineReducers({
  photos: PhotosReducer
});
