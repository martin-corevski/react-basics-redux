import * as actionTypes from '../actions/actionTypes'
// By using utility.js we make our switch cases leaner
import { updateObject } from '../utility'

const initialState = {
  results: []
}

// In order to have even leaner switch cases we can create functions that take
// care of the state update
const addResult = (state, action) => {
  const res = {
    id: new Date(),
    val: action.result
  }
  return updateObject(state, {results: state.results.concat(res)})
}

const removeResult = (state, action) => {
  const updatedResult = state.results.filter(res => res.id !== action.id)
  return updateObject(state, {results: updatedResult})
}

// ////////////
// REDUCER  //
// ////////////

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RESULT:
      return addResult(state, action)
    case actionTypes.REMOVE_RESULT:
      return removeResult(state, action)
  }

  return state
}

export default reducer
