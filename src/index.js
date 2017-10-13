import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import CounterPanel from './CounterPanel';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CounterPanel />, document.getElementById('root'));
registerServiceWorker();
