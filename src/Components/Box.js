import React, { Component } from "react";
import "./Box.css";

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = { className: "dead" };
  }
  handleChange() {
    let patterns = [
      "Block",
      "Beehive",
      "Loaf",
      "Boat",
      "Tub",
      "Blinker",
      "Toad",
      "Beacon",
      "Pulsar",
      "Pentadecathlon",
      "Glider",
      "Light-Weight Spaceship",
      "Middle-Weight Spaceship",
      "Heavy-Weight Spaceship",
      "Gosper Glider Gun",
      "Simkin Glider Gun",
    ];

    let sizes = [
      [4, 4],
      [6, 5],
      [6, 6],
      [5, 5],
      [5, 5],
      [5, 5],
      [6, 6],
      [6, 6],
      [17, 17],
      [11, 18],
      [6, 6],
      [8, 6],
      [11, 9],
      [12, 10],
      [38, 11],
      [35, 23],
    ];

    if (
      document.getElementsByClassName("btnSelected").length > 0 &&
      document.getElementById("button").className === "inactive"
    ) {
      console.log(document.getElementsByClassName("btnSelected")[0].id);
      var str = document.getElementsByClassName("btnSelected")[0].className;
      str = str.substr(0, str.indexOf("btnSelected"));
      console.log(str);

      document.getElementsByClassName("btnSelected")[0].className = str;
    } else {
      if (document.getElementById("button").className === "inactive") {
        if (this.state.className == "dead") {
          this.setState({ className: "alive" });
        } else {
          this.setState({ className: "dead" });
        }
      }
    }
  }

  render() {
    return (
      <td
        className={this.state.className}
        id={this.props.id}
        onClick={this.handleChange}
        draggable="false"
      ></td>
    );
  }
}
