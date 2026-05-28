import React from 'react'

function Child1(props) {
  console.log(props.data = 'sachin')
  return (
    <div>Child1: {props.data}</div>
  )
}

export default Child1