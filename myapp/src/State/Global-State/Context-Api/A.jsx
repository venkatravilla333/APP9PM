import React, { useState } from 'react'
import B from './B'
import C from './C'

export var nameContent = React.createContext() //how to store
export var ageContent = React.createContext() //how to store
console.log(nameContent)

function A() {
 var [name, setName] = useState('sachin')
 var [age, setAge] = useState(45)
  return (
    <div>
      <button onClick={() => setName('kohli')}>update name</button>
      <button onClick={() => setAge(age+1)}>update age</button>
      <ageContent.Provider value={age}>
      <nameContent.Provider value={name}>
      <B />
      <C />
      </nameContent.Provider>
      </ageContent.Provider>
    </div>
  )
}

export default A