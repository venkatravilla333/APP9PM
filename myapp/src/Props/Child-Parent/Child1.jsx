import React from 'react'

function Child1(props) {
  console.log(props)
  var data = 'data from child1'
  return (
    <div style={{border:"2px solid", margin: "10px", padding:"10px"}}>
      <h3>Child1</h3>
      <button onClick={()=> props.test(data)}>send data to parent</button>
    </div>
  )
}

export default Child1