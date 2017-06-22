import React from 'react';
import PhotoList from '../../components/photo_list/photo_list.js';
import { bindAll } from 'lodash';
import Waypoint from 'react-waypoint';
import Spinner from '../../components/spinner/spinner.js';
import Search from '../../components/search/search.js';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    bindAll(this, '_handleChange', '_searchPhotos', '_requestMorePhotos', '_handleKeyPress');
  }

  // Implements a controlled input component, updates component state
  _handleChange(e) {
    let state = {};
    state[e.target.id] = e.target.value;
    this.setState(state);
  }

  // Requests additional photos from the Flickr API
  _requestMorePhotos() {
    this.props.loading();
    this.props.requestMorePhotos(this.state.query, this.props.page + 1);
  }

  // Main search function, calls the fetchPhotos action and renders loader
  _searchPhotos() {
    this.props.loading();
    this.props.fetchPhotos(this.state.query);
  }

  // Ensures that a user can use the enter key when searching
  _handleKeyPress(e) {
    if(e.key == 'Enter') {
      this._searchPhotos();
    }
  }

  render() {
    let _renderWaypoint = (this.props.photos.length > 0) ? (
      <Waypoint onEnter={this._requestMorePhotos}/>
    ) : (
      null
    );

    let _renderSpinner = (this.props.isLoading) ? (<Spinner />) : (null);

    return (
      <div className={'homeContainer'}>
        <Search
          handleChange={this._handleChange}
          searchPhotos={this._searchPhotos}
          keyPress={this._handleKeyPress}
        />
        <PhotoList photos={this.props.photos} />
        {_renderSpinner}
        {_renderWaypoint}
      </div>
    );
  }
}

export default PhotoIndex;
