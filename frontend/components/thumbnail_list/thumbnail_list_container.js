import {connect} from 'react-redux';
import ThumbnailList from './thumbnail_list';
import {updateCurrentPage} from '../../actions/ui_actions';


const mapStateToProps = state => ({
  pages: state.ui.pages,
  currentPage: state.ui.currentPage,
  boards: state.boards
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateCurrentPage: pageNum => dispatch(updateCurrentPage(pageNum)),
  //ownProps.requestBoards is passed down by the containing component,
  //specifying what sort of boards are being given to it
  requestBoards: pageNum => dispatch(ownProps.requestPage(pageNum))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThumbnailList);
