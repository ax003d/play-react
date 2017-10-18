import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Weather from './Weather';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Weather />, document.getElementById('root'));
registerServiceWorker();
