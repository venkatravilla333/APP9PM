import React, { useContext } from 'react'
import { ageContent, nameContent } from './A'

function H() {
  // var name = nameContent._currentValue
  var name = useContext(nameContent) //how to consume
  var age = useContext(ageContent) //how to consume
  // console.log(name)
  return <h3>{name}, {age}</h3>
  
}

export default H