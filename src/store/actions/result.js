import * as actionTypes from './actionTypes'

export const storeResult = (result) => {
  // The result can be updated before sending it to the reducer, or it can
  // be updated in the reducer. If the data doesn't need to be manipulated
  // before being sent to the reducer and subsequently update the state it's
  // better to be manipulated inside the reducer action. Again this would work
  // in both places and it's up to us to choose and stick to it. Example:
  // result *= 2
  return {
    type: actionTypes.ADD_RESULT,
    result: result
  }
}

export const addResult = (result) => {
  // Simulating async action, thunk as middleware enables the return of a
  // function. If we need an access to the state we can use getState as
  // a second argument, but it's optional. That said we should keep
  // this kind of approach to the minimum and try sending everything we need
  // from the component as payload: addResult = (multipleArguments)
  return (dispatch, getState) => {
    setTimeout(() => {
      console.log('[addResult] old state counter: ', getState().ctr.counter)
      dispatch(storeResult(result))
    }, 2000)
  }
}

export const removeResult = (id) => {
  return {
    type: actionTypes.REMOVE_RESULT,
    id: id
  }
}
