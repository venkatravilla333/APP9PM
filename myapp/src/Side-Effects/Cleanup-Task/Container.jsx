import React, { useState } from 'react'
import Child from './Child'

function Container() {
 var [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>remove component</button>
      {display && <Child/>}
    </div>
  )
}

export default Container