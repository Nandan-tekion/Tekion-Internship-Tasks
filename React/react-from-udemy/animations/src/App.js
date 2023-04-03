import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    show: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };

  showBlockHandler = () => {
    this.setState((prevState) => {
      return {
        showBlock: !prevState.showBlock,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.showBlockHandler}>
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("OnEnter")}
          onEntering={() => console.log("OnEntering")}
          onEntered={() => console.log("OnEntered")}
          onExit={() => console.log("OnExit")}
          onExiting={() => console.log("OnExiting")}
          onExited={() => console.log("OnExited")}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <Modal show={this.state.show} closed={this.closeModal} />
        {this.state.show && <Backdrop show={this.state.show} />}
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
