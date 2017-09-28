import PlaybackContainer from '../playback/playback_container';
import React from 'react';

const BoardThumbnail = ({boardId}) => {



  return(
    <div class='thumbnail-wrapper'>
      <PlaybackContainer
        boardId={boardId}
        canvasId={'thumbnail-canvas'}
        dims={{height: '100', width: '150'}}
        />
      Thumbnail!
    </div>
  );

};

export default BoardThumbnail;
