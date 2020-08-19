import React, { Component } from "react";
import "./Box.css";

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = { className: "dead" };
  }
  buildElement(name) {
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
    let len = sizes[patterns.indexOf(name)];
    let ID = this.props.id;
    let x = parseInt(ID.substr(0, ID.indexOf("-")));
    let y = parseInt(ID.substr(ID.indexOf("-") + 1));

    let isXEven = len[0] % 2 == 0 ? 0 : 1;
    let isYEven = len[1] % 2 == 0 ? 0 : 1;
    let halfX = Math.floor(len[0] / 2);
    let halfY = Math.floor(len[1] / 2);

    if (x - halfX - isXEven < 0 || x + halfX + isXEven >= 75) {
      alert(
        "Illegal Placement: Please place the pattern within the grid and account for space on the sides"
      );
    } else if (y - halfY - isYEven < 0 || y + halfY + isYEven >= 100) {
      alert(
        "Illegal Placement: Please place the pattern within the grid and account for space on the sides"
      );
    }

    console.log("X: " + x);
    console.log("Y: " + y);
    console.log("Half X: " + halfX);
    console.log("Half Y: " + halfY);
    console.log("Is X Even: " + isXEven);
    console.log("Is Y Even: " + isYEven);
    
    for (var X = x - halfX; X <= x + halfX + isXEven; X++) {
      for (var Y = y - halfY; Y <= y + halfY + isYEven; Y++) {
        try {
          document.getElementById("" + Y + "-" + X).className = "alive";
        } catch {
          console.log("" + X + "-" + Y);
        }
      }
    }
  }
  handleChange() {
    if (
      document.getElementsByClassName("btnSelected").length > 0 &&
      document.getElementById("button").className === "inactive"
    ) {
      this.buildElement(document.getElementsByClassName("btnSelected")[0].id);
      var str = document.getElementsByClassName("btnSelected")[0].className;
      str = str.substr(0, str.indexOf("btnSelected"));
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
