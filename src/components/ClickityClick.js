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
    // passing an object to update the state
    // this.setState(
    //   {
    //     hasBeenClicked: true,
    //   },
    //   () => console.log(this.state.hasBeenClicked)
    // );
    // console.log(this.state.hasBeenClicked);
    this.setState((previousState) => {
      // using fun'n previousState to update the state
      return {
        hasBeenClicked: !previousState.hasBeenClicked,
      };
    });
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>
          {this.state.hasBeenClicked ? "YES" : "NO"}
        </button>
      </div>
    );
  }
}

export default ClickityClick;
