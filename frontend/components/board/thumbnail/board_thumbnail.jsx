import PlaybackContainer from '../playback/playback_container';
import React from 'react';
import {Link} from 'react-router-dom';

class BoardThumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateBoardStage('running');
  }

  render(){
    return(
      <Link to={`/show/${this.props.boardId}`}>
        <PlaybackContainer
          boardId={this.props.boardId}
          canvasId={'thumbnail-canvas'}
          dims={{height: '150', width: '225'}}
          />
      </Link>
    );
  }
}

export default BoardThumbnail;
