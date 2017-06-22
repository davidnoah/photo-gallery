import { connect } from 'react-redux';
import { fetchPhotos, requestMorePhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = state => ({
  photos: state.photos.photos,
  page: state.photos.page
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (query) => dispatch(fetchPhotos(query)),
  requestMorePhotos: (query, page) => dispatch(requestMorePhotos(query, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
