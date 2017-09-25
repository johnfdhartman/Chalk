
import React from 'react';
import merge from 'lodash/merge';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //three stages: start, running, finished, post-finished
      stage: 'start',
      time: {
        minutes: 0,
        seconds: 0
      },
      type: (this.props.path === '/create' ? 'create' : 'show')
    };

    console.log(this.state.type);
  }


  componentDidMount() {
    this.props.updateBoardStage('start');
  }

  componentWillReceiveProps(nextProps){
    console.log('clock componentWillReceiveProps');
    if (this.props.boardStage === 'running'
      && nextProps.boardStage === 'finished'
    ) {
      clearInterval(this.clockInterval);
    }
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
    this.clockInterval = setInterval(
      () => {this.tick.bind(this)();},
      1000);
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
    let newStage = 'post-finished';
    if (this.state.stage === 'start') {
      newStage = 'running';
      this.runClock.bind(this)();
    } else {
      newStage = this.state.stage;
    }
    this.props.updateBoardStage(newStage);
  }


  handleCreateClick() {
    let newStage = 'post-finished';
    if (this.state.stage === 'start') {
      newStage = 'running';
      this.runClock.bind(this)();
    } else if (this.state.stage === 'running') {
      newStage = 'finished';
    } else if (this.state.stage === 'finished') {
      newStage = 'post-finished';
    }
    this.props.updateBoardStage(newStage);
  }

  createDisplayText() {
    switch(this.state.stage) {
      case 'start':
        return 'Start Recording';

      case 'running':
        return `${this.state.time.minutes}:${this.state.time.seconds}`;

      case 'finished':
        return `Finished Recording`;

      case 'post-finished':
        return 'Finished Recording';
    }
  }

  showDisplayText() {
    switch(this.props.boardStage) {
      case 'start':
        return 'Start Playback';

      case 'running':
        return `${this.state.time.minutes}:${this.state.time.seconds}`;

      case 'finished':
        return 'Playback Finished';

      default:
        return 'Playback Finished';
    }
  }

  displayText() {
    console.log('clock displayText');
    switch(this.state.type){
      case 'create':
        return this.createDisplayText.bind(this)();

      default:
        return this.showDisplayText.bind(this)();
    }
  }

  render() {
    console.log('rerendering');
    return(
      <button
        id='clock'
        className={`clock ${this.state.stage}`}
        onClick={this.handleClick.bind(this)}>
        {this.displayText.bind(this)()}
      </button>
    );
  }

}
export default Clock;
