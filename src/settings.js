import React from 'react';

import {settings} from "./utils";


class Settings extends React.Component {

  constructor() {
    super();

    this.state = {}
  }

  componentDidMount() {

    console.log('component did mount')
  }

  change = (e) => {};

  render() {

    return (
      <section>
        <div className='container settings-header'>
          <h1>Settings</h1>
          <img src={'/img/save.svg'} className='btn-save' alt='save btn'
               onClick={(e) => this.switchSettings(e)}/>
        </div>

        <div className='container'>
          {
            Object.keys(settings).map((id, index) => {

              const setting = settings[id];

              return (
                <div className='item' key={index}>
                  <h5>{setting.title}</h5>
                  <input type='range'
                         min={setting.min} step='1' value={setting.default} max={setting.max}
                         onChange={(e) => this.change(e)}/>
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
