import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoApp from './ToDoApp';
import registerServiceWorker from './registerServiceWorker';
import store from './Store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <ToDoApp />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
