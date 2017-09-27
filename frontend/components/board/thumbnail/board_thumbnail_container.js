import {connect} from 'react-redux';
import BoardThumbnail from './board_thumbnail';

const mapStateToProps = (ownProps, state) => ({
  boardId: ownProps.boardId
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BoardThumbnail);
