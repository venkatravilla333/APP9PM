import React, { useState } from 'react'

function F(props) {
  console.log(props)

  // var [name, setName] = useState('sachin')
    
  
  return (
    <div>F: name: {props.name} </div>
  )
}

export default F