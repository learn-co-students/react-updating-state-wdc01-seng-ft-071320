// Code ClickityClick Component Here
import React, { Component } from "react";

class ClickityClick extends Component {
  state = {
    hasBeenClicked: false,
  };
  //   constructor() {
  //     super();
  //     // Define the initial state:
  //     this.state = {
  //       hasBeenClicked: false,
  //     };
  //     // console.log(this.state.hasBeenClicked);
  //   }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true,
    });
    // console.log(this.state.hasBeenClicked);
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ClickityClick;
