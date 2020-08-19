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
      "Simkin Glider Gun",
      "Gosper Glider Gun",
    ];
    let sizes = [
      [4, 4],
      [5, 6],
      [6, 6],
      [5, 5],
      [5, 5],
      [5, 5],
      [6, 6],
      [6, 6],
      [17, 17],
      [18, 11],
      [5, 5],
      [6, 7],
      [7, 8],
      [7, 9],
      [11, 40],
      [23, 35],
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
    } else {
      console.log("X: " + x);
      console.log("Y: " + y);
      console.log("Width: " + len[0]);
      console.log("Height: " + len[1]);
      console.log("Half X: " + halfX);
      console.log("Half Y: " + halfY);
      console.log("Is X Even: " + isXEven);
      console.log("Is Y Even: " + isYEven);

      let matrices = [
        // Block
        [
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 1, 1, 0],
          [0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 0, 1, 0],
          [0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0],
          [0, 1, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 0],
          [0, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0, 0],
          [0, 1, 1, 0, 0, 0],
          [0, 1, 1, 0, 0, 0],
          [0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 0],
          [0, 0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 1, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 1, 0],
          [0, 1, 0, 0, 0, 1, 0],
          [0, 0, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 0],
          [0, 1, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 0, 1, 0],
          [0, 1, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 0],
          [0, 1, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 1, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
          [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
      ];
      let xItr = 0;
      let yItr = 0;
      console.log("X from: " + (x - halfX));
      console.log("X to: " + (x + halfX + isXEven));
      console.log("Y from: " + (y - halfY));
      console.log("Y to: " + (y + halfY + isYEven));
      for (let X = x - halfX; X < x + halfX + isXEven; X++) {
        for (let Y = y - halfY; Y < y + halfY + isYEven; Y++) {
          console.log("" + X + "-" + Y);
          if (matrices[patterns.indexOf(name)][yItr][xItr] == 1) {
            document.getElementById("" + X + "-" + Y).className = "alive";
          } else {
            document.getElementById("" + X + "-" + Y).className = "dead";
          }
          xItr++;
        }
        yItr++;
        xItr = 0;
      }
    }
  }
  handleChange() {
    console.log(this.props.id);
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
