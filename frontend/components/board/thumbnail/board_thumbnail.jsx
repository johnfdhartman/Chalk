import PlaybackContainer from '../playback/playback_container';

const BoardThumbnail = ({props}) => {



  return(
    <div class='thumbnail-wrapper'>
      <PlaybackContainer
        boardId={props.boardId}
        canvasId={'thumbnail-canvas'}
        dims={{height: '100', width: '150'}}
        />
      Thumbnail!
    </div>
  );

};

export default BoardThumbnail;
