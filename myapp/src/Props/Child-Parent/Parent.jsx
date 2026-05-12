import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

  // var data = 100
 var [data, setData] = useState(100)

  function test(age) {
    console.log(age)
    // data = age
    setData(age)
  }

  // function changeData() {
  //   // data = 'kohli'
  //   // console.log(data)
  // }

  console.log('render')
  return (
    <div>
      {/* <button onClick={setData}>change data</button> */}
      <h3>Parent com: {data}</h3>
      <Child1 test = {test} />
      <Child2/>
    </div>
  )
}

export default Parent