import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

  var normalVaribale = 0
  var [stateVariable, setX] = useState()

function test(data) {
  console.log(data)
  setX(data)
  }
  
  function updateNormalVariable() {
    normalVaribale++
    console.log(normalVaribale)
  }

  

  console.log('render')
  return (
    <div>
      {/* <h3>{normalVaribale}</h3>
      <button onClick={updateNormalVariable}>update normalVaribale</button> */}
      <h3 style={{border: "2px solid red", width: "300px", height: "200px"}}>{stateVariable}</h3>
      {/* <button onClick={()=>setX(stateVariable+1)}>update state Varibale</button> */}
      <Child1 test = {test} />
      <Child2 data = {stateVariable} />
    </div>
  )
}

export default Parent