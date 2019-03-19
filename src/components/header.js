import React from 'react';
import PropTypes from 'prop-types';
import {statesApp} from '../utils';

const Header = (props) => {

  this.switchSettings = (e) => {

    e.preventDefault();

    switch (props.state) {
      case statesApp.timer:
        props.switch(statesApp.settings);
        break;
      case statesApp.settings:
        props.switch(statesApp.timer);
        break;
      default:
    }
  };

  return (
    <header>
      <div className='column controls'>
        {
          props.state === statesApp.timer
            ? <img src={'img/sliders.svg'} alt='go to settings btn' onClick={(e) => this.switchSettings(e)}/>
            : <img src={'img/clock.svg'} alt='go to timer btn' onClick={(e) => this.switchSettings(e)}/>
        }

        <a href='//github.com/xthelavr/pomodoro' target='_blank' rel='noopener noreferrer'>
          <img src={'img/github.svg'} alt='github btn'/>
        </a>
      </div>
    </header>
  )
};

Header.propTypes = {
  switch: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired
};

export default Header
