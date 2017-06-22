import React from 'react';
import PhotoList from '../../components/photo_list';

const PhotoIndex = (props) => {
  const { photos } = props;
  return (
    <div>
      <PhotoList photos={photos}/>
    </div>
  );
};

export default PhotoIndex;
