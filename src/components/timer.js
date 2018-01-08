import React from 'react';
import {defaultSettings, getSettings, statesParts, statesTimer} from '../utils';

class Timer extends React.Component {

  constructor() {
    super();

    this.state = {
      distance: null,
      min: '',
      sec: '00',
      state: statesTimer.stopped,
      part: statesParts.work,
      interval: null,
      pending: true,
      settings: null,
      loops: 0
    }
  }

  componentDidMount() {

    let settings = getSettings();
    settings = settings ? settings : defaultSettings();
    let min = settings.timer.work.value;
    min = min < 10 ? `0${min}` : min;

    this.setState({
      pending: false,
      settings: settings,
      min: Math.round(min / 60),
      distance: settings.timer.work.value
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
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

        let distance = this.state.distance, newDistance,
          newPart, loops = this.state.loops;

        if (distance < 0) {

          switch (this.state.part) {
            case statesParts.work:
              newPart = this.state.loops === 3 ? statesParts.long : statesParts.short;
              newDistance = this.state.loops === 3 ?
                this.state.settings.timer.long.value : this.state.settings.timer.short.value;
              loops++;
              break;
            case statesParts.short :
              newPart = statesParts.work;
              newDistance = this.state.settings.timer.work.value;
              break;
            case statesParts.long:
              newPart = statesParts.work;
              newDistance = this.state.settings.timer.work.value;
              loops = 0;
              break;
            default:
          }
        }

        distance = newDistance ? newDistance : distance;
        newPart = newPart ? newPart : this.state.part;

        let tempMin = Math.floor(distance / 60);
        let tempSec = distance - tempMin * 60;
        let sec = tempSec === 0 ? '00' : tempSec < 10 ? `0${tempSec}` : tempSec;
        let min = tempMin === 0 ? '00' : tempMin < 10 ? `0${tempMin}` : tempMin;

        this.setState({distance: --distance, sec: sec, min: min, part: newPart, loops: loops});
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

    this.setState((prev) => ({
      interval: null,
      min: Math.round(prev.settings.timer.work.value / 60),
      sec: '00',
      distance: prev.settings.timer.work.value,
      state: statesTimer.stopped,
      part: statesParts.work
    }))
  };

  skip = (e) => {

    e.preventDefault();

    this.setState({distance: 0})
  };

  render() {

    if (this.state.pending) return <div/>;

    return (
      <section className='hero'>
        <div className='row'>
          <small>{this.state.part}</small>
        </div>

        <div className='row'>
          <span className='display'>{this.state.min}:{this.state.sec}</span>
        </div>

        <div className='row'>
          {
            this.state.state === statesTimer.stopped ?
              <div className='row'>
                <img src={'img/play.svg'} alt='play btn' className='item' onClick={(e) => this.start(e)}/>
              </div> :

              this.state.state === statesTimer.paused ?
                <div className='row'>
                  <img src={'img/skip-forward.svg'} alt='skip part btn' className='item'
                       onClick={(e) => this.skip(e)}/>
                  <img src={'img/play.svg'} alt='play btn' className='item' onClick={(e) => this.start(e)}/>
                  <img src={'img/square.svg'} alt='square btn' className='item' onClick={(e) => this.stop(e)}/>
                </div> :

                <div className='row'>
                  <img src={'img/skip-forward.svg'} alt='skip part btn' className='item'
                       onClick={(e) => this.skip(e)}/>
                  <img src={'img/pause.svg'} alt='pause btn' className='item' onClick={(e) => this.pause(e)}/>
                  <img src={'img/square.svg'} alt='square btn' className='item' onClick={(e) => this.stop(e)}/>
                </div>
          }
        </div>
      </section>
    )
  }
}

export default Timer
