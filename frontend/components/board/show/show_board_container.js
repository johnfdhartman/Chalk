import {connect} from 'react-redux';
import ShowBoard from './show_board.jsx';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowBoard)
);
