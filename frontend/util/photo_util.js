import { ajax } from 'jquery';

export const fetchPhotos = () => (
  ajax({
    url: `${location.origin}/api/photos`
  })
);
