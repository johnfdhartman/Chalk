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
      <div class='thumbnail-wrapper'>
        <PlaybackContainer
          boardId={this.props.boardId}
          canvasId={'thumbnail-canvas'}
          dims={{height: '150', width: '225'}}
          />
        <div className='description'>
          {this.props.board.title} by
          <Link to={`/users/${this.props.board.author.id}`}>
            {this.props.board.author.username}
          </Link>
        </div>
      </div>
    );
  }
}

export default BoardThumbnail;
