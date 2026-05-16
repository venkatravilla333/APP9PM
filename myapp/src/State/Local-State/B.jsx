import D from './D'
import E from './E'

import React, { useState } from 'react'

function B(props) {
  console.log(props)
  // var [name, setName] = useState('sachin')
  
  // function updateName() {
  //   setName('kohli')
  // }
  return (
    <div>
      <h3> B </h3>
      <D name = {props.name} />
      <E name={props.name} />
    </div>
  )
}

export default B