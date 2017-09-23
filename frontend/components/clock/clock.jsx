import React from 'react';
import merge from 'lodash/merge';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
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

  isActiveClass() {
    return (this.state.active ? 'active' : 'inactive');
  }

  handleClick(event) {
    this.setState({
      active: !(this.state.active)
    });
    if (this.state.active) {
      this.runClock.bind(this)();
    } else {
      clearInterval(this.clockInterval);
    }
  }

  render() {
    return(
      <button
        id='clock'
        className={`clock ${this.isActiveClass.bind(this)}`}
        onClick={this.handleClick.bind(this)}>
        {this.state.time.minutes}:{this.state.time.seconds}
      </button>
    );
  }

}
export default Clock;
