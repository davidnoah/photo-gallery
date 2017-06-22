import React from 'react';
import './photo_list.css';

const Photo = (props) => {
  const { photo } = props;
  return (
    <img className={'photo'} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
  )
}

const PhotoList = ({ photos }) => {
  return (
    <div className={'photoListContainer'}>
      {photos.map((photo, idx) => (
        <Photo key={photo.id, idx} photo={photo} />
      ))}
    </div>
  )
}

export default PhotoList;
