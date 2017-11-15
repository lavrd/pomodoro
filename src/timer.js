import React from 'react';

import {statesTimer} from './utils';


class Timer extends React.Component {

  constructor() {
    super();

    this.state = {
      distance: 1499, // sec, 25m
      min: '25',
      sec: '00',
      state: statesTimer.stopped,
      interval: null,
    }
  }

  componentDidMount() {

    console.log('component did mount')
  }

  start = (e) => {

    e.preventDefault();

    switch (this.state.state) {
      case statesTimer.paused:
        this.setState({state: statesTimer.launched});
        return;
      case statesTimer.launched:
        return;
      default:
        this.setState({state: statesTimer.launched});
    }

    let interval = setInterval(() => {

      if (this.state.state === statesTimer.launched) {
        let distance = this.state.distance;
        let min = Math.floor(distance / 60);
        let tempSecs = distance - min * 60;
        let sec = tempSecs === 0 ? '00' : tempSecs;

        this.setState({distance: --distance, sec: sec, min: min})
      }
    }, 1000);

    this.setState({interval: interval})
  };

  pause = (e) => {

    e.preventDefault();
    this.setState({state: statesTimer.paused})
  };

  stop = (e) => {

    e.preventDefault();

    clearInterval(this.state.interval);
    this.setState({interval: null, min: '25', sec: '00', distance: 1499, state: statesTimer.stopped})
  };

  render() {

    return (
      <section>
        <div className='container m-150'>
          <span className='display'>{this.state.min}:{this.state.sec}</span>
        </div>

        <div className='container'>
          <img src={'/img/play.svg'} alt='play btn' className='item' onClick={(e) => this.start(e)}/>
          <img src={'/img/pause.svg'} alt='pause btn' className='item' onClick={(e) => this.pause(e)}/>
          <img src={'/img/square.svg'} alt='square btn' className='item' onClick={(e) => this.stop(e)}/>
        </div>
      </section>
    )
  }
}

export default Timer
