import React, { Component } from "react";
import "./Popup.css";
import "./Close.css";
import Animation from "./Animation";

//for debugging without printing stuff 1000000000 times in the console
//window.setInterval(function(){ console.log(); }, 2000);
export default class Popup extends Component {
  constructor(props) {
    super(props);
  }

  handleClose() {
    document.getElementById("popup").className = "popup-inactive";
  }

  handleNext() {
    document.getElementById("popup").removeChild(document.getElementsByClassName("super-container")[0])
  }
  handlePrev() {
    if (document.getElementById("popup-position").innerText == "1/10") {
      alert("You have reached the beginning");
    }
  }

  render() {
    return (
      <div className="popup-active" id="popup">
        <div className="wrapper" onClick={this.handleClose}>
          <a href="#" className="close-button">
            <div className="in">
              <div className="close-button-block"></div>
              <div className="close-button-block"></div>
            </div>
            <div className="out">
              <div className="close-button-block"></div>
              <div className="close-button-block"></div>
            </div>
          </a>
        </div>
          <h4 id="popup-position">1/10</h4>
        <div className="super-container">
          <div className="container">
            <h1>Game of Life Visualizer</h1>
            <h3>
              This short tutorial will walk you through all of the features of
              this application.
            </h3>
          </div>
          <div>
            <Animation />
          </div>
        </div>
          <div className="wrapper" id="next" onClick={this.handlePrev}>
            <svg
              width="18px"
              height="17px"
              viewBox="0 0 18 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="prev"
                transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)"
              >
                <polygon
                  className="arrow"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                ></polygon>
                <polygon
                  className="arrow-fixed"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                ></polygon>
                <path d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
              </g>
            </svg>
          </div>{" "}
          <div className="wrapper" id="prev" onClick={this.handleNext}>
            <svg
              width="18px"
              height="17px"
              viewBox="-1 0 18 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <polygon
                  className="arrow"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                ></polygon>
                <polygon
                  className="arrow-fixed"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                ></polygon>
                <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
              </g>
            </svg>
          </div>
      </div>
    );
  }
}
