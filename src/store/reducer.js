import * as actionTypes from './actions'

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  // Both ways, switch and if statements are ok, whatever floats your boat,
  // though the performance is a little bit better with immediate if statements
  // https://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      }
    case actionTypes.ADD_RESULT:
      const res = {
        id: new Date(),
        val: state.counter
      }
      // concat takes care of the next 2 lines
      // let results = [...state.results]
      // results.push(res)
      return {
        ...state,
        // concat will create a new array and add the object afterwards which
        // means the state is not mutated without copying it first
        results: state.results.concat(res)
      }
    case actionTypes.REMOVE_RESULT:
      // let results = [...state.results]
      // results.splice(action.id, 1)
      return {
        ...state,
        results: state.results.filter(res => res.id !== action.id)
      }
  }

  // if (action.type === 'INCREMENT') {
  //   return {
  //     counter: state.counter + 1
  //   }
  // }
  // if (action.type === 'DECREMENT') {
  //   return {
  //     counter: state.counter - 1
  //   }
  // }
  // if (action.type === 'ADD') {
  //   return {
  //     counter: state.counter + action.val
  //   }
  // }
  // if (action.type === 'SUBTRACT') {
  //   return {
  //     counter: state.counter - action.val
  //   }
  // }
  return state
}

export default reducer
