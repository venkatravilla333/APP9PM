import React, { useState } from 'react'

function H(props) {
  console.log(props)
  // var [name, setName] = useState('sachin')
  
  // function updateName() {
  //   setName('kohli')
  // }
  return (
    <div>
      <h3> H : Name: {props.name} </h3>
      {/* <button onClick={updateName}>update name</button> */}
    </div>
  )
}

export default H