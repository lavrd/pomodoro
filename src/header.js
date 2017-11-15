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
    <div>
      <div className='progress-bar'/>

      <div className='container btn-settings'>
        <img src={'/img/settings.svg'} alt='play btn' onClick={(e) => this.switchSettings(e)}/>
      </div>
    </div>
  )
};

Header.propTypes = {
  switch: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired
};

export default Header
