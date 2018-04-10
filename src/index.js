import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.scss'
import App from './containers/App'
// Typically store the reducer in a separate file, there could be a store folder
// on the containers and components folders level
// import reducer from './store/reducer'
// With multiple reducers
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'

// Combining multiple reducers
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
})

// Custom middleware for logging the dispatched actions and current state
const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching ', action)
      const result = next(action)
      console.log('[Middleware] Next state ', store.getState())
      return result
    }
  }
}

// For Chrome Dev tools, https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Single reducer store
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// Multiple reducers store and as a second argument we can pass the so called
// enhancer (the middleware or multiple middlewares)
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
