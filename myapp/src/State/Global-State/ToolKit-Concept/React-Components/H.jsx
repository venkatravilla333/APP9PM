import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Toolkit/cakeSlice'
import { buyIceCreame } from '../Toolkit/iceCreameSlice'

function H() {

 let noOfCakes =  useSelector((state) => {
    return state.cake.noOfCakes
 })
 let noOfIceCreams =  useSelector((state) => {
    return state.iceCreame.noOfIceCreams
 })
  
  let dispatch = useDispatch()

  return (
    <div>
      <h3>noOfCakes: {noOfCakes}</h3>
      <button onClick={()=>dispatch(buyCake())}>buyCake</button>
      <h3>noOfIceCreams: {noOfIceCreams}</h3>
      <button onClick={()=>dispatch((buyIceCreame()))}>buyIceCreame</button>
    </div>
  )
}

export default H