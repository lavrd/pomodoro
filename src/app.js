import React from 'react';


const states = {
  launched: 'launched',
  stopped: 'stopped',
  paused: 'paused',
};

class App extends React.Component {

  constructor() {

    super();

    this.state = {
      distance: 1499, // sec, 25m
      min: '25',
      sec: '00',
      state: states.stopped,
      interval: null,
    }
  }

  componentDidMount() {

    console.log('component did mount')
  }

  start = (e) => {

    e.preventDefault();

    if (this.state.state === states.paused) {
      this.setState({state: states.launched});
      return
    }

    this.setState({state: states.launched});

    let interval = setInterval(() => {

      if (this.state.state === states.launched) {
        let distance = this.state.distance;
        let min = Math.floor(distance / 60);
        let tempsec = distance - min * 60;
        let sec = tempsec === 0 ? '00' : tempsec;

        this.setState({distance: --distance, sec: sec, min: min})
      }
    }, 1000);

    this.setState({interval: interval})
  };

  pause = (e) => {

    e.preventDefault();
    this.setState({state: states.paused})
  };

  stop = (e) => {

    e.preventDefault();

    clearInterval(this.state.interval);
    this.setState({interval: null, min: '25', sec: '00', distance: 1499, state: states.stopped})
  };

  render() {

    return (
      <div>
        <div className='progress-bar'/>

        <div className='container'>
          <span className='display'>{this.state.min}:{this.state.sec}</span>
        </div>

        <div className='container'>
          <img src={'/img/play.svg'} alt='play btn' onClick={(e) => this.start(e)}/>
          <img src={'/img/pause.svg'} alt='play btn' onClick={(e) => this.pause(e)}/>
          <img src={'/img/square.svg'} alt='play btn' onClick={(e) => this.stop(e)}/>
        </div>
      </div>
    )
  }
}

export default App
