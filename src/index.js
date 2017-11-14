import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './app';
import './reset.css';
import './app.css';


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

registerServiceWorker();
