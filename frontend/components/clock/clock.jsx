import React from 'react';
import merge from 'lodash/merge';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: 'inactive',
      time: {
        minutes: 0,
        seconds: 0
      }
    };
  }

  componentDidMount() {
    this.runClock.bind(this)();
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



  render() {
    return(
      <button
        id='clock'
        className={`clock ${this.state.isActive}`}>
        {this.state.time.minutes}:{this.state.time.seconds}
      </button>
    );
  }

}
export default Clock;
