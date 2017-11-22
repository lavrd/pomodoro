import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import {App} from './components';
import './theme/reset.css';
import './theme/app.css';


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

registerServiceWorker();
