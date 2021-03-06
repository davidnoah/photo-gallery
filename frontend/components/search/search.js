import React from 'react';
import './search.css';

// Search bar -- This component renders an input field and button
const Search = ({ handleChange, searchPhotos, keyPress }) => {
  return (
    <div className={'searchbarContainer'}>
      <i className={"fa fa-picture-o"} style={{ ariaHidden: "true", fontSize: '36px', marginRight: '10px'}}></i>
      <input className={'searchInput'} onChange={handleChange} onKeyPress={keyPress} id={'query'} placeholder={'Type in a word...'}/>
      <button className={'searchButton'} onClick={searchPhotos}>Search</button>
    </div>
  );
};

export default Search;
