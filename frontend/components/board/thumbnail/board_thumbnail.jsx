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
    let dims ={
      width: Math.max(document.documentElement.clientWidth,
        window.innerWidth || 0) * 0.2,
      height: Math.max(document.documentElement.clientHeight,
        window.innerHeight || 0) * 0.15
      };
    return(
      <Link to={`/show/${this.props.boardId}`}>
        <PlaybackContainer
          dims={dims}
          boardId={this.props.boardId}
          canvasId={'thumbnail-canvas'}
          />
      </Link>
    );
  }
}

export default BoardThumbnail;
