import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
