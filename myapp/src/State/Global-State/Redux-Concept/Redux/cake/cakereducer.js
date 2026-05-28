import { BUY_CAKE } from "./actionTypes";


let initialState = {
  noOfCakes: 100
}

export let cakeReducer = (state = initialState, action)=> {
  console.log(action)
  switch (action.type) {
    case BUY_CAKE:
      return {
        noOfCakes: state.noOfCakes - 1
      }
      break;
    default:
      return state 
  }
}