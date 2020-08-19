import React, { Component } from "react";
import "./Bar.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  ButtonGroup,
  ToggleButton,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Github from "./github.png";
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
  //  - width: 0 <= c < 5075
  //  - height: 0 <= r < 50

  // == Rules ==
  //   - Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  //   - Any live cell with two or three live neighbours lives on to the next generation.
  //   - Any live cell with more than three live neighbours dies, as if by overpopulation.
  //   - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

  blankArray() {
    var ele = [];
    for (var i = 0; i < 50; i++) {
      var tmp = [];
      for (var j = 0; j < 75; j++) {
        tmp.push(0);
      }
      ele.push(tmp);
    }
    return ele;
  }
  buildArray() {
    var mat = this.blankArray();

    for (var r = 0; r < 50; r++) {
      for (var c = 0; c < 75; c++) {
        if (document.getElementById("" + r + "-" + c).className == "alive") {
          mat[r][c] = 1;
        }
      }
    }

    return mat;
  }

  simulate() {
    var future = this.blankArray();
    var grid = this.buildArray();

    for (var l = 1; l < 50 - 1; l++) {
      for (var m = 1; m < 75 - 1; m++) {
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
    for (var i = 0; i < 50; i++) {
      for (var j = 0; j < 75; j++) {
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
    let speeds = ["Low", "Medium", "High"];
    let numbers = [350, 250, 150];
    if (btn.className === "inactive") {
      btn.className = "active";

      this.setState({
        incrementer: setInterval(this.simulate.bind(this), 150),
      });
      btn.src = "https://img.icons8.com/fluent/30/000000/pause.png";
    } else {
      btn.className = "inactive";
      clearInterval(this.state.incrementer);
      this.setState({ incrementer: null });
      btn.src = "https://img.icons8.com/fluent/24/000000/play.png";
    }
  }

  clearRow(r) {
    for (var c = 0; c < 75; c++) {
      document.getElementById("" + r + "-" + c).className = "dead";
    }
  }
  eraseBoard() {
    for (var i = 0; i < 50; i++) {
      setTimeout(() => this.clearRow(i), 500);
    }
  }

  place(ptn) {
    if (document.getElementsByClassName("btnSelected").length !== 0) {
      for (
        var i = 0;
        i < document.getElementsByClassName("btnSelected").length;
        i++
      ) {
        var str = document.getElementsByClassName("btnSelected")[i].className;
        str = str.substr(0, str.indexOf("btnSelected"));
        document.getElementsByClassName("btnSelected")[i].className = str;
      }
    }
    document.getElementById(ptn).className += " btnSelected";
  }

  render() {
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Learn how to use this visualizer by going to the corresponding <br />{" "}
        <a target="_blank" href="https://github.com/bhargavannem/GameOfLife">
          <strong> Github Repository</strong>
        </a>
      </Tooltip>
    );

    return (
      <div id="bar">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
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
                <NavDropdown.Item
                  onClick={() => this.place("Glider")}
                  id="Glider"
                >
                  Glider
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.place("Light")}
                  id="Light"
                >
                  Light-Weight Spaceship
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.place("Middle")}
                  id="Middle"
                >
                  Middle-Weight Spaceship
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.place("Heavy")}
                  id="Heavy"
                >
                  Heavy-Weight Spaceship
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Glider Guns" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => this.place("Gosper")}
                  id="Gosper"
                >
                  Gosper Glider Gun
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.place("Simkin")}
                  id="Simkin"
                >
                  Simkin Glider Gun
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    width="24px"
                    height="24px"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                  </svg>
                </Button>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Link
                target="_blank"
                href="https://github.com/bhargavannem/GameOfLife"
              >
                <img src={Github} width="24" height="24" />
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                  trigger="click"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
                  </svg>
                </OverlayTrigger>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
