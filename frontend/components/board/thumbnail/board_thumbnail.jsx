import PlaybackContainer from '../playback/playback_container';
import React from 'react';
import {Link} from 'react-router-dom';
import {
  START,
  RUNNING,
  FINISHED,
  POST_FINISHED
} from '../board_stages.js';

class BoardThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dims: {
        width: window.innerWidth * 0.2,
        height: window.innerWidth * 0.15
      }
    };
  }

  componentDidMount() {
    this.props.updateBoardStage(RUNNING);
    this.updateDimensions.bind(this)();
    window.addEventListener('resize', this.handleResize.bind(this), false);
  }

  updateDimensions() {
    let width = window.innerWidth * 0.2;
    this.setState({
      dims: {
        width,
        height: width * 0.75
      }
    });
    console.log(`resizing with dims ${this.state.dims.width}, ${this.state.dims.height}`);
  }

  handleResize(event) {
    this.updateDimensions.bind(this)();
  }

  render(){
    let dims = this.state.dims;
    return(

      <Link to={`/show/${this.props.boardId}`}>
        <PlaybackContainer
          dims={dims}
          boardId={this.props.boardId}
          canvasId={'thumbnail-canvas'}
          onResize={this.handleResize.bind(this)}
          />
      </Link>
    );
  }
}

export default BoardThumbnail;
