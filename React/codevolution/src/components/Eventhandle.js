import React, { Component } from 'react'

class Eventhandle extends Component {

    constructor(props) {
      super(props)
    
     // this.clickHandler = this.clickHandler.bind(this);

      this.state = {
         message : "hello"
      }
    }
    
    // clickHandler(){
    //     this.setState({ message : "Goodbye!" });
    //     //console.log(this);
    // }

    clickHandler = () => {
        this.setState({ message : "Goodbye!" });
    };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Eventhandle
