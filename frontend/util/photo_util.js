import { ajax } from 'jquery';

export const fetchPhotos = (query) => (
  ajax({
    url: `${location.origin}/api/photos`,
    error: (err) => console.log(err),
    data: {query: query}
  })
);

export const requestMorePhotos = (query, page) => (
  ajax({
    url: `${location.origin}/api/photos/${page}`,
    error: (err) => console.log(err),
    data: {query: query}
  })
);
