import React, { Component } from "react";
import "./Bar.css";

export default class Bar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.runSimulation = this.runSimulation.bind(this);
    this.simulate = this.simulate.bind(this);
    this.getNumAliveNeighbors = this.getNumAliveNeighbors.bind(this);
  }

  getNumAliveNeighbors(r, c) {
    var cnt = 0;
    if (
      c - 1 >= 0 &&
      document.getElementById("" + r + "-" + (c - 1)).className === "alive"
    ) {
      cnt++;
    }
    if (
      c + 1 < 100 &&
      document.getElementById("" + r + "-" + (c + 1)).className === "alive"
    ) {
      cnt++;
    }
    if (
      r - 1 >= 0 &&
      document.getElementById("" + (r - 1) + "-" + c).className === "alive"
    ) {
      cnt++;
    }
    if (
      r + 1 < 75 &&
      document.getElementById("" + (r + 1) + "-" + c).className === "alive"
    ) {
      cnt++;
    }
    return cnt;
  }
  // == Dimensions ==
  //  - width: 0 <= c < 100
  //  - height: 0 <= r < 75

  // == Rules ==
  //   - Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  //   - Any live cell with two or three live neighbours lives on to the next generation.
  //   - Any live cell with more than three live neighbours dies, as if by overpopulation.
  //   - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  simulate() {
    for (var r = 0; r < 75; r++) {
      for (var c = 0; c < 100; c++) {
        var ele = document.getElementById("" + r + "-" + c);

        var isAlive;
        if (ele.className === "dead") {
          isAlive = false;
        } else {
          isAlive = true;
        }
        var numAliveNeighbors = this.getNumAliveNeighbors(r, c);
      }
    }
  }
  runSimulation(toggle) {
    var ele;
    if (toggle === true) {
      console.log("Turning on...");
      ele = setInterval(this.simulate.bind(this), 2000);
    } else {
      console.log("Turning off...");
      clearInterval(ele);
    }
  }
  handleClick() {
    var btn = document.getElementById("button");
    if (btn.className === "active") {
      btn.className = "unactive";
      this.runSimulation(false);
    } else {
      btn.className = "active";
      this.runSimulation(true);
    }
  }

  render() {
    return (
      <div id="bar">
        <button
          id="button"
          className="unactive"
          onClick={this.handleClick}
        ></button>
      </div>
    );
  }
}
