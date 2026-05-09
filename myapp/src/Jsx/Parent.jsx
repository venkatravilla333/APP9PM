import React from "react"

function Parent() {
  //  api 
  var x = 'sachin'
  // var x = 45
  // var x = [1,2,3]
  // var x = {
  //   name: 'sachin'
  // }
  // var x = () => {
  //   return 'sachin'
  // }
  // var x = true
  // var x = undefined
  // var x = null
  // var x = {
  //   name: null
  // }
  

  return (
    // <div id="mydiv">
    //   <h1>With using JSX</h1>
    // </div>
    // [<p>This is papa one</p>,
    // <p>This is papa two</p>]
    // <div id="mydiv">
    //   <p>This is papa one</p>
    //   <p>This is papa two</p>
    // </div>
    // <>
    //   <p>This is papa one</p>
    //   <p>This is papa two</p>
    // </>

    <h3>Hi : {x}</h3>
    // <h3>Hi : {x.name}</h3>
    // <h3>Hi : {x()}</h3>
    // <h3>Hi : {x}</h3>
    // <h3>Hi : {x.name}</h3>
    // <h3>Hi : {var x = 100}</h3>

  );

//  return React.createElement('div', {id: 'mydiv'}, React.createElement('h1', null, 'Without using JSX'))

}

export default Parent
