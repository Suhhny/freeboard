import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom'; 

import App from './App';
import store from './store';

let root = document.getElementById('root');

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>
    ,root
);