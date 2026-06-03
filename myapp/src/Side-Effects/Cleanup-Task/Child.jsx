import React, { useEffect, useState } from 'react'

function Child() {
  var [x, setX] = useState(0)
  var [y, setY] = useState(0)

  function updateState(e) {
    console.log('update state')
    setX(e.clientX)
    setY(e.clientY)
  }

  console.log('render')

  useEffect(() => {
    console.log('effect called')
    window.addEventListener('click', updateState)
    return () => {
      console.log('cleanup task')
      window.removeEventListener('click', updateState)
         }
  }, [])

  return (
    <div>
      <h3>X: {x}</h3>
      <h3>Y: {y}</h3>
    </div>
  )
}

export default Child