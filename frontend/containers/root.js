import React from 'react';
import { Provider } from 'react-redux';

// Components
import store from '../store.js';
import PhotoIndex from './photos/photo_index_container';

export const Root = () => (
  <Provider store={store} >
    <PhotoContainer />
  </Provider>
);
