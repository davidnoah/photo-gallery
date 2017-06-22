import React from 'react';
import PhotoList from '../../components/photo_list/photo_list.js';
import { bindAll } from 'lodash';
import Waypoint from 'react-waypoint';
import Spinner from '../../components/spinner/spinner.js';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    bindAll(this, '_handleChange', '_searchPhotos', '_requestMorePhotos');
  }

  _handleChange(e) {
    let state = {};
    state[e.target.id] = e.target.value;
    this.setState(state);
  }

  _requestMorePhotos() {
    this.props.loading();
    this.props.requestMorePhotos(this.state.query, this.props.page + 1);
  }

  _searchPhotos() {
    this.props.loading();
    this.props.fetchPhotos(this.state.query);
  }

  render() {
    let _renderWaypoint = (this.props.photos.length > 0) ? (<Waypoint onEnter={this._requestMorePhotos}/>) : (null);
    let _renderSpinner = (this.props.isLoading) ? (<Spinner />) : (null);

    return (
      <div className={'homeContainer'}>
        <input onChange={this._handleChange} id={'query'} placeholder={'Type in a dope word...'}/>
        <button onClick={this._searchPhotos}>Search</button>
        <PhotoList photos={this.props.photos} />
        {_renderSpinner}
        {_renderWaypoint}
      </div>
    );
  }
}

export default PhotoIndex;
