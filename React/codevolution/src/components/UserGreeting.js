// Conditional Rendering

import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

    return this.state.isLoggedIn && <div>Welcome User</div>; // 4.

    // return this.state.isLoggedIn ? (
    //   <div>Welcome User</div>
    // ) : (                                      3.
    //   <div>Welcome Guest</div>
    // );

    // let message;

    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome User</div>
    // }else{
    //     message = <div>Welcome Guest </div>     1.
    // }

    // return(
    //     <div>{message}</div>
    // );

    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //           <div>Welcome User</div>   2.
    //       </div>
    //     )
    // }else{
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
  }
}

export default UserGreeting;
