import React, { Component } from "react";

class Welcome extends Component {
    render(){
        const {name, lastname} = this.props;
        return <h1>Welcome {name} {lastname}</h1>
    }
}

export default Welcome;