import React from 'react';
import PropTypes from 'prop-types';

import {statesApp} from './utils';


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
    <section>
      <div className='progress-bar'/>

      <div className='column controls'>
        <img src={'/img/settings.svg'} alt='settings btn' onClick={(e) => this.switchSettings(e)}/>
        <img src={'/img/bell.svg'} alt='bell btn' onClick={() => console.log('bell')}/>

        <a href='https://github.com/spacelavr/pomodoro' target='_blank' rel='noopener noreferrer'>
          <img src={'/img/github.svg'} alt='github btn'/>
        </a>
      </div>
    </section>
  )
};

Header.propTypes = {
  switch: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired
};

export default Header
