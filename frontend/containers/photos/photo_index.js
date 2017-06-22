import React from 'react';
import PhotoList from '../../components/photo_list';
import { bindAll } from 'lodash';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    bindAll(this, '_handleChange', '_searchPhotos');
  }

  _handleChange(e) {
    let state = {};
    state[e.target.id] = e.target.value;
    this.setState(state);
  }

  _searchPhotos() {
    this.props.fetchPhotos(this.state.query);
  }

  render() {
    return (
      <div>
        <input onChange={this._handleChange} id={'query'} placeholder={'Type in a dope word...'}/>
        <button onClick={this._searchPhotos}>Search</button>
        <PhotoList photos={this.props.photos}/>
      </div>
    );
  }
}

export default PhotoIndex;
