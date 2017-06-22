import { ajax } from 'jquery';

export const fetchPhotos = (query) => {
  return ajax({
    url: `${location.origin}/api/photos`,
    error: (err) => console.log(err),
    data: {query: query}
  });
};
