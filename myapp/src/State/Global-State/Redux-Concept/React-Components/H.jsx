import React from 'react'
import { store } from '../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { buycake } from '../Redux/cake/actionCreators'
import { buyIceCreame } from '../Redux/iceCreame/actionCreator'

function H() {
  // var res = store.getState()
  // console.log(res)
  var noOfCakes = useSelector((state) => {
    return state.cake.noOfCakes
  })
  var noOfIceCreams = useSelector((state) => {
    return state.iceCreame.noOfIceCreams
  })
  
  var dispatch = useDispatch()
  return (
    <div>
      <h3>H: Cakes: {noOfCakes}</h3>
      <button onClick={()=>dispatch(buycake())}>Buy Cake</button>
      <h3>H: IceCreams: {noOfIceCreams}</h3>
      <button onClick={()=>dispatch(buyIceCreame())}>Buy Icecreame</button>
     
   
    </div>
  )
}

export default H