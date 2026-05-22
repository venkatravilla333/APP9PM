import React from 'react'
import { store } from '../Redux/store'
import { useSelector } from 'react-redux'

function H() {
  // var res = store.getState()
  // console.log(res)
  var noOfCakes = useSelector((store) => {
    return state.noOfCakes
  })
  return (
    <div>H: Cakes: {noOfCakes}</div>
  )
}

export default H