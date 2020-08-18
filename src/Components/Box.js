import React, { Component } from "react";
import "./Box.css";


export default class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props.id);
  }
  render() {
    return <td className="box" onClick={this.handleClick}></td>;
  }
}
