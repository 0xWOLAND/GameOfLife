import React, { Component } from "react";
import "./Bar.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Pause from "./pause.png";
import Logo from "./logo.png";
export default class Bar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { incrementer: null };
    this.simulate = this.simulate.bind(this);
    this.getNumAliveNeighbors = this.getNumAliveNeighbors.bind(this);
    this.eraseBoard = this.eraseBoard.bind(this);
  }

  getNumAliveNeighbors(R, C) {
    var cnt = 0;
    for (var i = -1; i <= 1; i++) {
      for (var j = -1; j <= 1; j++) {
        if (
          document.getElementById("" + (R + i) + "-" + (C + j)).className ==
          "alive"
        ) {
          cnt++;
        }
      }
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

  blankArray() {
    var ele = [];
    for (var i = 0; i < 75; i++) {
      var tmp = [];
      for (var j = 0; j < 100; j++) {
        tmp.push(0);
      }
      ele.push(tmp);
    }
    return ele;
  }
  buildArray() {
    var mat = this.blankArray();

    for (var r = 0; r < 75; r++) {
      for (var c = 0; c < 100; c++) {
        if (document.getElementById("" + r + "-" + c).className == "alive") {
          mat[r][c] = 1;
        }
      }
    }

    // console.log(mat);
    return mat;
  }

  simulate() {
    var future = this.blankArray();
    var grid = this.buildArray();

    for (var l = 1; l < 74; l++) {
      for (var m = 1; m < 99; m++) {
        var aliveNeighbours = 0;
        for (var i = -1; i <= 1; i++) {
          for (var j = -1; j <= 1; j++) {
            aliveNeighbours += grid[l + i][m + j];
          }
        }
        aliveNeighbours -= grid[l][m];
        // Cell is lonely and dies
        if (grid[l][m] == 1 && aliveNeighbours < 2) future[l][m] = 0;
        // Cell dies due to over population
        else if (grid[l][m] == 1 && aliveNeighbours > 3) future[l][m] = 0;
        // A new cell is born
        else if (grid[l][m] == 0 && aliveNeighbours == 3) future[l][m] = 1;
        // Remains the same
        else future[l][m] = grid[l][m];
      }
    }
    for (var i = 0; i < 75; i++) {
      for (var j = 0; j < 100; j++) {
        if (future[i][j] == 1) {
          document.getElementById("" + i + "-" + j).className = "alive";
        } else {
          document.getElementById("" + i + "-" + j).className = "dead";
        }
      }
    }
  }

  handleClick() {
    var btn = document.getElementById("button");

    if (btn.className === "inactive") {
      btn.className = "active";
      console.log("Starting simulator...");
      this.setState({
        incrementer: setInterval(this.simulate.bind(this), 250),
      });
      btn.src = "https://img.icons8.com/fluent/30/000000/pause.png";
    } else {
      console.log("Stopping simulator...");
      btn.className = "inactive";
      clearInterval(this.state.incrementer);
      this.setState({ incrementer: null });
      btn.src = "https://img.icons8.com/fluent/24/000000/play.png";
    }
  }

  clearRow(r) {
    for (var c = 0; c < 100; c++) {
      document.getElementById("" + r + "-" + c).className = "dead";
    }
  }
  eraseBoard() {
    for (var i = 0; i < 75; i++) {
      setTimeout(this.clearRow(i), 500);
    }
  }

  place(ptn) {
    console.log(document.getElementsByClassName("btnSelected").length);
    if (document.getElementsByClassName("btnSelected").length === 0) {
      document.getElementById(ptn).className += " btnSelected";
    } else {
      alert("You can only choose one pattern at a time");
    }
  }

  render() {
    return (
      <div id="bar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <strong>Game of Life Visualizer</strong>
          </Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Still Lifes" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  id="Block"
                  onClick={() => this.place("Block")}
                >
                  Block
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.place("Beehive")}
                  id="Beehive"
                >
                  Beehive
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.place("Loaf")} id="Loaf">
                  Loaf
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.place("Boat")} id="Boat">
                  Boat
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.place("Tub")} id="Tub">
                  Tub
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Oscillators" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => this.place("Blinker")}
                  id="Blinker"
                >
                  Blinker
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.place("Toad")} id="Toad">
                  Toad
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.place("Beacon")}
                  id="Beacon"
                >
                  Beacon
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.place("Pulsar")}
                  id="Pulsar"
                >
                  Pulsar
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.place("Pentadecathlon")}
                  id="Pentadecathlon"
                >
                  Pentadecathlon
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Spaceships" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => this.place("Glider")} id="Glider">Glider</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.place("Light-Weight Spaceship")} id="Light-Weight Spaceship">
                  Light-Weight Spaceship
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.place("Middle-Weight Spaceship")} id="Middle-Weight Spaceship">
                  Middle-Weight Spaceship
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.place("Heavy-Weight Spaceship")} id="Heavy-Weight Spaceship">
                  Heavy-Weight Spaceship
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Glider Guns" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => this.place("Simkin Glider Gun")} id="Simkin Glider Gun">
                  Simkin Glider Gun
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.place("Gosper Glider Gun")} id="Gosper Glider Gun">
                  Gosper Glider Gun
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item className="mr-auto">
                <img
                  src="https://img.icons8.com/fluent/24/000000/play.png"
                  id="button"
                  className="inactive"
                  onClick={this.handleClick}
                />
              </Nav.Item>
              <Nav.Item className="mr-auto">
                <Button variant="danger" onClick={this.eraseBoard}>
                  Erase
                </Button>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Link>More deets</Nav.Link>
              <Nav.Link>Dank memes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
