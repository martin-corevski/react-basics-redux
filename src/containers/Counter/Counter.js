import React, { Component } from 'react'
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import * as actionTypes from '../../store/actions'

class Counter extends Component {
  render () {
    let results = null
    results = this.props.results.map(res =>
      <li key={res.id}
        onClick={() => this.props.onRemoveResult(res.id)} >
        {res.val}
      </li>
    )

    return (
      <div>
        {/* <CounterOutput value={this.state.counter} /> */}
        {/* With redux now we can access state.counter by using props.ctr */}
        <CounterOutput value={this.props.ctr} />
        <CounterControl label='Increment'
          clicked={this.props.onIncrementCounter} />
        <CounterControl label='Decrement'
          clicked={this.props.onDecrementCounter} />
        <CounterControl label='Add 5'
          clicked={this.props.onAdd} />
        <CounterControl label='Subtract 5'
          clicked={this.props.onSubtract} />
        <hr />
        {/* <button onClick={this.props.onAddResult}>Store result</button> */}
        {/* For multiple stores */}
        <button onClick={() => this.props.onAddResult(this.props.ctr)}>
          Store result
        </button>
        <ul>
          {results}
        </ul>
      </div>
    )
  }
}

// The state being used is the state passed by Redux from it's reducer (store)
const mapStateToProps = state => {
  return {
    // ctr: state.counter,
    // results: state.results
    // For multiple reducers
    ctr: state.ctr.counter,
    results: state.res.results
  }
}

// This way we are mapping the reducer (store) actions to props in order for
// them to be available in the component
const mapDispatchToProps = dispatch => {
  return {
    // dispatch has to have a type property and it should be written in caps
    onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
    onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
    // in most cases an object is passed as a second property, example:
    // onAdd: () => dispatch({type: actionTypes.ADD, payload: { val: 5 } }),
    onAdd: () => dispatch({type: actionTypes.ADD, val: 5}),
    onSubtract: () => dispatch({type: actionTypes.SUBTRACT, val: 5}),
    // onAddResult: () => dispatch({type: actionTypes.ADD_RESULT}),
    // For multiple reducers
    onAddResult: (res) => dispatch({type: actionTypes.ADD_RESULT, result: res}),
    onRemoveResult: (id) => dispatch({type: actionTypes.REMOVE_RESULT, id: id})
  }
}

// connect gives access to the state and actions stored in the reducer.js file
// to Counter by mapping the state and actions to props
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
// We don't need to map the state or actions if we are not using them both,
// instead of them null can be passed, example:
// connect(null, mapDispatchToProps)
