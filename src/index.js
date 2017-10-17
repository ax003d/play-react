import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import store from './Store';
import {Provider} from 'react-redux';
import CounterPanel from './CounterPanel';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <CounterPanel />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
