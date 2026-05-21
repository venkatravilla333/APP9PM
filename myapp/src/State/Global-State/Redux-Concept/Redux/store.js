
import { createStore } from 'redux'

//initial state

let initialState = {
  noOfCakes: 100
}

function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case 'BUY_CAKE':
      return {
        noOfCakes: state.noOfCakes - 1
      }
      break;
    default:
      return state 
  }
}

export const store = createStore(cakeReducer)
console.log(store)

