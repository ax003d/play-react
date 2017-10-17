import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import store from './Store';
import Provider from './Provider';
import CounterPanelContainer from './CounterPanelContainer';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <CounterPanelContainer />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
