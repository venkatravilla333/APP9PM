import React from 'react'

function Child2(props) {
  console.log(props)
  return (
    <div style={{border: "2px solid blue", padding: "20px", margin: "20px"}}>Child2:{props.data}</div>
  )
}

export default Child2