'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import document from './reducers/document.js';
import parts from './reducers/parts.js';

import Document from './containers/document.js';

const app = combineReducers({document, parts});

let store = createStore(app, {parts: []}, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
    <Provider store={store}>
        <Document />
    </Provider>
, window.document.getElementById('app'));
