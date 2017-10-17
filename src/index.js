import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CounterPanelContainer from './CounterPanelContainer';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CounterPanelContainer />, document.getElementById('root'));
registerServiceWorker();
