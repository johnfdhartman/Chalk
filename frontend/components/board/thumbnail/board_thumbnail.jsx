import PlaybackContainer from '../playback/playback_container';
import React from 'react';

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
          dims={{height: '100', width: '150'}}
          />
        Thumbnail!
      </div>
    );
  }
}

export default BoardThumbnail;
