import React from 'react';
import { Provider } from 'react-redux';

// Components
import store from '../store.js';
import PhotoContainer from './photos/photo_index_container';

const Root = () => (
  <Provider store={store} >
    <PhotoContainer />
  </Provider>
);

export default Root;
