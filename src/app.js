import React from 'react';

import Header from './header';
import Timer from './timer';
import Settings from './settings';
import {statesApp} from './utils'


class App extends React.Component {

  constructor() {
    super();

    this.state = {state: statesApp.timer}
  }

  switchSettings = (state) => {

    this.setState({state: state})
  };


  render() {

    return (
      <div>
        <Header switch={this.switchSettings} state={this.state.state}/>

        {
          this.state.state === statesApp.timer ? <Timer/> : <Settings/>
        }
      </div>
    )
  }
}

export default App
