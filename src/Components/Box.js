import React, { Component } from "react";
import "./Box.css";

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { className: "dead" };
  }
  handleChange() {
    if (document.getElementById("button").className === "inactive") {
      if (this.state.className == "dead") {
        this.setState({ className: "alive" });
      } else {
        this.setState({ className: "dead" });
      }
    }
  }
  render() {
    return (
      <td
        className={this.state.className}
        id={this.props.id}
        onClick={this.handleChange}
        
      ></td>
    );
  }
}
