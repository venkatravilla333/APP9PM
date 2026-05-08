import React from "react";

class Parent extends React.Component{
  constructor() {
    super()
    this.state = {
      name: 'kohli'
    }
  }
  render() {
    return <h1>Class com: {this.state.name}</h1>
     }
}
export default Parent
