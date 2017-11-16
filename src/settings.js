import React from 'react';

import {settings} from "./utils";


class Settings extends React.Component {

  constructor() {
    super();

    this.state = {settings: settings}
  }

  componentDidMount() {

    console.log('component did mount')
  }

  componentWillUnmount() {

    console.log('component will unmount')
  }

  change = (e, id) => {

    let settings = this.state.settings;
    settings[id].value = e.target.value;

    this.setState({settings: settings});
  };

  render() {

    return (
      <section className='hero'>
        <div className='row'>
          <h1>Settings</h1>
        </div>

        <div className='row'>
          {
            Object.keys(this.state.settings).map((id, index) => {

              const setting = this.state.settings[id];

              return (
                <div className='item' key={index}>
                  <div className='row space-between'>
                    <h5>{setting.title}</h5>
                    <small>{setting.value}</small>
                  </div>

                  <input type='range'
                         min={setting.min} step='1' value={setting.value} max={setting.max}
                         onChange={(e) => this.change(e, id)}/>
                </div>
              )
            })
          }
        </div>
      </section>
    )
  }
}

export default Settings
