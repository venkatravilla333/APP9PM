import React, { useEffect, useState } from 'react'

function Child() {
  var [normalValue, setNormalValue] = useState(0)
  var [domValue, setDomValue] = useState(0)

  useEffect(() => {
    console.log('effects called')
    document.title = domValue
  }, [domValue])
  
  console.log('render')
  return (
    <div>
      <h4>Normal value: {normalValue}</h4>
      <button onClick={()=>setNormalValue(normalValue+1)}>update normal value</button>
      <h4>Dom value: {domValue}</h4>
      <button onClick={()=>setDomValue(domValue+1)}>update dom value</button>
    </div>
  )
}

export default Child