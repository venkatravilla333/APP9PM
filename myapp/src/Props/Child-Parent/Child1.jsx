import React from 'react'

function Child1(props) {

  console.log(props)

  var age = 45
  return (
    <div>
      <h3>Child1:</h3>
      <button onClick={()=>props.test(age)}>send data to parent</button>
    </div>
  )
}

export default Child1