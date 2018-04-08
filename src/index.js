import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import './index.scss'
import App from './containers/App'
// Typically store the reducer in a separate file, there could be a store folder
// on the containers and components folders level
// import reducer from './store/reducer'
// With multiple reducers
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
})

// const store = createStore(reducer)
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
