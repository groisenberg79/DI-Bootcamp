import React, { Component } from "react";
import Garage from "./Garage";

class CarModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }

  render() {
    return (
      <>
        <h1>This is a {this.state.color} {this.props.model}.</h1>
        <Garage size="small" />
      </>
    );
  }
}

export default CarModel;