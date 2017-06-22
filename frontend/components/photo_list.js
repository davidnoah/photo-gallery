import React from 'react';

const Photo = (props) => {
  const { photo } = props;
  return (
    <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
  )
}

const PhotoList = ({ photos }) => {
  return (
    <div>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  )
}

export default PhotoList;
