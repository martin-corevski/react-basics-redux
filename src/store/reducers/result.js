import * as actionTypes from '../actions'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RESULT:
      const res = {
        id: new Date(),
        val: action.result
      }
      return {
        ...state,
        results: state.results.concat(res)
      }
    case actionTypes.REMOVE_RESULT:
      return {
        ...state,
        results: state.results.filter(res => res.id !== action.id)
      }
  }

  return state
}

export default reducer
