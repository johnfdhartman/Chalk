
import React from 'react';
import merge from 'lodash/merge';

import {
  START,
  RUNNING,
  FINISHED,
  POST_FINISHED
} from '../board/board_stages.js';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        minutes: 0,
        seconds: 0
      },
      type: (this.props.path === '/create' ? 'create' : 'show')
    };

  }


  componentDidMount() {
    this.props.updateBoardStage(START);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.boardId !== nextProps.boardId) {
      this.resetClock.bind(this)();
      return null;
    }
    if (this.props.board
      && this.props.board.stage === START
      && nextProps.board.stage === RUNNING) {
        this.runClock.bind(this)();
      }
    if (this.props.board
      && this.props.board.stage === RUNNING
      && nextProps.board.stage === FINISHED
    ) {
      clearInterval(this.clockInterval);
    }
  }

  resetClock() {
    clearInterval(this.clockInterval);
    this.props.updateBoardStage(START);
    this.setState({
      time: {
        minutes: 0,
        seconds: 0,
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }


  tick() {
    let currentTime = merge({}, this.state.time);
    if (currentTime.seconds < 60) {
      currentTime.seconds +=1;
    } else {
      currentTime.seconds = 0;
      currentTime.minutes += 1;
    }
    this.setState({
      time: currentTime
    });
  }

  runClock() {
    if (!this.clockInterval) {
      this.clockInterval = setInterval(
        () => {this.tick.bind(this)();},
        1000);
    }
  }

  handleClick(event) {
    switch(this.state.type) {
      case 'create':
        this.handleCreateClick.bind(this)();
        break;

      case 'show':
        this.handleShowClick.bind(this)();
        break;
    }
  }

  handleShowClick() {
    let newStage = POST_FINISHED;
    if (this.props.board.stage === START) {
      newStage = RUNNING;
      this.runClock.bind(this)();
    } else {
      newStage = this.props.board.stage;
    }
    this.props.updateBoardStage(newStage);
  }


  handleCreateClick() {
    let newStage = FINISHED;
    if (this.props.board.stage === START) {
      newStage = RUNNING;
      this.runClock.bind(this)();
    } else if (this.props.board.stage === RUNNING) {
      newStage = FINISHED;
    } else if (this.props.board.stage === FINISHED) {
      newStage = FINISHED;
    }
    this.props.updateBoardStage(newStage);
  }

  createDisplayText() {
    switch(this.props.board.stage) {
      case START:
        return 'Start Recording';

      case RUNNING:
        return `${this.state.time.minutes}:${this.state.time.seconds}`;

      case FINISHED:
        return `Finished Recording`;

      case POST_FINISHED:
        return 'Finished Recording';
    }
  }

  showDisplayText() {
    switch(this.props.board.stage) {
      case START:
        return 'Start Playback';

      case RUNNING:
        return `${this.state.time.minutes}:${this.state.time.seconds}`;

      case FINISHED:
        return 'Playback Done';

      default:
        return 'Playback Done';
    }
  }

  displayText() {
    switch(this.state.type){
      case 'create':
        return this.createDisplayText.bind(this)();

      default:
        return this.showDisplayText.bind(this)();
    }
  }

  render() {
    console.log('THIS.PROPS.BOARD', this.props.board);
    if (this.props.board) {
      return(
        <button
          id='clock'
          className={`clock ${this.props.board.stage}`}
          onClick={this.handleClick.bind(this)}>
          {this.displayText.bind(this)()}
        </button>
      );
    } else {
      return(
        <button
          id='clock'
          className={`clock loading`}>
          Loading...
        </button>
      );
    }
  }

}
export default Clock;
