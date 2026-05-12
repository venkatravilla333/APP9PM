import React from 'react'

function Child1(props) {

  console.log(props)

  var age = 45
  return (
    <div>
      <h3>Child1: age: {age}</h3>
      <button onClick={()=>props.test(age)}>send data from child1 to parent</button>
    </div>
  )
}

export default Child1