import React from 'react';
import {findDOMNode} from 'react-dom';
import {merge} from 'lodash/merge';
import ClockContainer from '../../clock/clock_container';
import PlaybackContainer from '../playback/playback_container';

// let width = Math.max(document.documentElement.clientWidth,
//   window.innerWidth || 0);
// let height = Math.max(document.documentElement.clientHeight,
//   window.innerHeight || 0) * 0.9;

class ShowBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderCredits() {
    if (this.state.board) {
      return (
        <div className='credits'>
          <div className='title'>
            <label>Title:  </label>
            <div>{this.state.board.title}</div>
          </div>
          <div className='author'>
            <label>Author:  </label>
            <div>{this.state.board.author.username}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='credits'>
          Credits loading...
        </div>
      );
    }
  }


  render() {
    this.props.updateBoardStage('start', this.props.boardId);
    let credits = this.renderCredits.bind(this)();
    let dims = {
      width: Math.max(document.documentElement.clientWidth,
        window.innerWidth || 0),
      height: Math.max(document.documentElement.clientHeight,
        window.innerHeight || 0) * 0.9
      };
    return (
      <div id='show-board-wrapper'
        ref={(wrapper) => { this.wrapperRef = wrapper;}}
        allowFullScreen='true'
        >
        <PlaybackContainer
          dims={dims}
          boardId={this.props.boardId}
          canvasId={'board-canvas'}/>
        <div id='show-board-control'>
          {credits}
          <ClockContainer
            boardId={this.props.boardId}/>
        </div>
      </div>
    );
  }
}

export default ShowBoard;
