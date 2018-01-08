import React from 'react'
import {defaultSettings, getSettings, setSettings} from "../utils"

class Settings extends React.Component {

  constructor() {
    super();

    this.state = {
      settings: null,
      default: null,
      pending: true
    }
  }

  componentDidMount() {

    let settings = getSettings();
    settings = settings ? settings : defaultSettings();
    this.setState({settings: settings, pending: false})
  }

  componentWillUnmount() {

    setSettings(this.state.settings)
  }

  reset = (e) => {

    e.preventDefault();

    this.setState({settings: defaultSettings()});
  };

  change = (e, id) => {

    e.preventDefault();

    let settings = this.state.settings;
    settings.timer[id].value = e.target.value * 60 - 1;

    this.setState({settings: settings});
  };

  render() {

    if (this.state.pending) return <div/>;

    return (
      <section className='hero'>
        <div className='row'>
          <h1>Settings</h1>
        </div>

        <div className='row'>
          {
            Object.keys(this.state.settings.timer).map((id, index) => {

              const setting = this.state.settings.timer[id];

              return (
                <div className='item' key={index}>
                  <div className='row space-between'>
                    <h5>{setting.title}</h5>
                    <small>{Math.round(setting.value / 60)}</small>
                  </div>

                  <input type='range'
                         min={setting.min}
                         step='1' value={setting.value / 60}
                         max={setting.max}
                         onChange={(e) => this.change(e, id)}/>
                </div>
              )
            })
          }
        </div>

        <div className='row' style={{marginTop: '75px'}}>
          <img onClick={(e) => this.reset(e)} src={'img/rotate-ccw.svg'}
               alt='reset settings btn'/>
        </div>
      </section>
    )
  }
}

export default Settings
