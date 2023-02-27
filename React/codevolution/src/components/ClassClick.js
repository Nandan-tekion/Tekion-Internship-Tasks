import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("button Clicked from Class Click handler");
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}> Class Click</button>
      </div>
    )
  }
}

export default ClassClick
