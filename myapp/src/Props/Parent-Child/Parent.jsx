import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
  //  api call 
  var data = 'Data from db' //state

  return (
    <div>
      <Child1 data={data} />
      <Child2/>
    </div>
  )
}

export default Parent