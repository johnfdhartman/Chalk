
import React from 'react';
import merge from 'lodash/merge';

class CreateClock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //three stages: start, running, finish
      stage: 'start',
      time: {
        minutes: 0,
        seconds: 0
      }
    };
  }


  tick() {
    let currentTime = merge({}, this.state.time);
    if (currentTime.seconds < 60) {
      currentTime.seconds +=1;
    } else {
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
    let newStage;
    if (this.state.stage === 'start') {
      newStage = 'running';
      this.runClock.bind(this)();
    } else if (this.state.stage === 'running') {
      newStage = 'finished';
      clearInterval(this.clockInterval);
    } else if (this.state.stage === 'finished') {
      newStage = 'finished';
    }
    this.setState({stage: newStage});
  }

  render() {
    return(
      <button
        id='clock'
        className={`clock ${this.state.stage}`}
        onClick={this.handleClick.bind(this)}>
        {this.state.time.minutes}:{this.state.time.seconds}
      </button>
    );
  }

}
export default CreateClock;
