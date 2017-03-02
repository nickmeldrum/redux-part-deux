import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import product from './reducers/product.js'
import Products from './containers/products.js'

const app = combineReducers({product})

let store = createStore(app, {}, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
  <Provider store={store}>
    <Products />
  </Provider>
  , window.document.getElementById('app'))
