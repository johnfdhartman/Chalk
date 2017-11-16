import {connect} from 'react-redux';
import ThumbnailList from './thumbnail_list';
import {updateCurrentPage} from '../../actions/ui_actions';


const mapStateToProps = state => ({
  pages: state.ui.pages,
  currentPage: state.ui.currentPage,
  boards: state.boards
});

const mapDispatchToProps = dispatch => ({
  updateCurrentPage: pageNum => dispatch(updateCurrentPage(pageNum))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThumbnailList);
