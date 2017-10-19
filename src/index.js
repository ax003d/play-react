import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CitySelector from './CitySelector';
import Weather from './Weather';
import { Provider } from 'react-redux';
import store from './Store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store} >
        <div>
            <CitySelector />
            <Weather />
        </div>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
