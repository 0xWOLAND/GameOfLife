import React, { Component } from "react";
import "./Bar.css";

// == Rules ==
//   - Any live cell with fewer than two live neighbours dies, as if by underpopulation.
//   - Any live cell with two or three live neighbours lives on to the next generation.
//   - Any live cell with more than three live neighbours dies, as if by overpopulation.
//   - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

export default class Bar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.runSimulation = this.runSimulation.bind(this);
    this.simulate = this.simulate.bind(this);
  }

  // == Dimensions ==
  //  - width: 0 <= t < 100
  //  - height: 0 <= t < 75
  simulate() {
    for(var r = 0; r < 100; r++){
      for(var c = 0; c < 75; c++){
        var ele = document.getElementById("" + r + "-" + c);
        var isAlive;
        
      }
    }
  }
  runSimulation() {
    var ele = setInterval(this.simulate.bind(this), 500);
  }
  handleClick() {
    var btn = document.getElementById("button");
    if (btn.className === "active") {
      btn.className = "unactive";
    } else {
      btn.className = "active";
      this.runSimulation();
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
