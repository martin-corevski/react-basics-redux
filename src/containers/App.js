import React, { Component } from 'react'

import classes from './App.scss'
import Counter from './Counter/Counter'

class App extends Component {
  render () {
    return (
      <div className={classes.app}>
        <Counter />
      </div>
    )
  }
}

export default App
