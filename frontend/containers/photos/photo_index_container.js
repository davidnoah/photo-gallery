import { connect } from 'react-redux';
import { fetchPhotos, requestMorePhotos, loading } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = state => ({
  photos: state.photos.photos,
  page: state.photos.page,
  isLoading: state.photos.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (query) => dispatch(fetchPhotos(query)),
  requestMorePhotos: (query, page) => dispatch(requestMorePhotos(query, page)),
  loading: () => dispatch(loading())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
