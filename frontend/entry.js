import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});
