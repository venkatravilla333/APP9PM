import React, { useReducer, useState } from 'react'

function H() {

  var initialState = {
    count: 0
  }
  let countReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
      case 'increment':
        return {
          count: state.count + 1
        }
        break;
      case 'decrement':
        return {
          count: state.count - 1
        }
        break;
      case 'reset':
        return {
          count: state.count = 0
        }
        break;
     
    }
  
  }

  var [state, dispatch] = useReducer(countReducer, initialState)
  
  return (
    <div>
      <h4>H : {state.count}</h4>
      <button onClick={()=>dispatch({type: 'increment'})}>increment</button>
      <button onClick={()=>dispatch({type: 'decrement'})}>decrement</button>
      <button onClick={()=>dispatch({type: 'reset'})}>reset</button>
    </div>
  )
}

export default H