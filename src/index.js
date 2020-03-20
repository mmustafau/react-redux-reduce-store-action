import React from 'react';
import ReactDOM from 'react-dom';
import store from "./Store";
import {Provider} from 'react-redux';
import './index.css';
import App  from    './App'

import Counter from './Counter';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(

    <Provider store={store}>
    <App />
    </Provider>

    , document.getElementById('root'));
//registerServiceWorker();
