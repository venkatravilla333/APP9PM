import { BUY_ICE_CREAME } from "./actionTypes"



let initialState = {
  noOfIceCreams : 500
}


export let iceCreameReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAME:
      return {
        noOfIceCreams: state.noOfIceCreams - 1
      }
      break;
    default:
      return state
    
  }
  
}