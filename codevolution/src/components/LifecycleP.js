import React, { Component } from "react";
import LifecycleC from "./LifecycleC";

class LifecycleP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nandan",
    };

    console.log("LifecycleP constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleP getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleP componentDidMount");
  }

  shouldComponentUpdate(){
    console.log("LifecycleP shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("LifecycleP getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(){
    console.log("LifecycleP componentDidUpdate");
  }

  changeState = () => {
    this.setState({
        name : "new name "
    });
  }

  render() {
    console.log("LifecycleP render");
    return (
      <div>
        <div>LifecycleP</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleC />
      </div>
    );
  }
}

export default LifecycleP;
