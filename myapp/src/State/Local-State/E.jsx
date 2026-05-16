import React from 'react'
import H from './H'

function E(props) {
  console.log(props)
  return (
    <div>
      <H name={props.name} />
    </div>
  )
}

export default E