import React, { useState } from 'react'

function Parent() {
     
  var [x, setX] = useState(0) //how to store data 

  
  // console.log(res[0])
  // console.log(res[1])
 console.log('render')
  return (
    <div>
      <h3>Parent : {x}</h3>
      <button onClick={()=>setX(x+1)}>update data</button>
    </div> //how to consume data
  )
}

export default Parent