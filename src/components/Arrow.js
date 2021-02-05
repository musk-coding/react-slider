import React, { Component } from "react";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import "./Slider.css";
import "./Arrow.css";

export default class Arrow extends Component {
  constructor(props) {
    super(props);
    this.arrow = React.createRef();
    this.arrowImage = React.createRef();
  }

  componentDidMount() {
    if (this.props.direction === "right") {
      this.arrow.current.style.right = "25px";
      this.arrowImage.current.style.transform = "translateX(2px)";
    } else {
      this.arrow.current.style.left = "25px";
      this.arrowImage.current.style.transform = "translateX(-2px)";
    }
  }
  render() {
    return (
      <div className="arrow" onClick={this.props.handleClick} ref={this.arrow}>
        {this.props.direction === "right" ? (
          <img
            className="arrow-image"
            src={rightArrow}
            alt="right-arrow"
            ref={this.arrowImage}
          />
        ) : (
          <img
            className="arrow-image"
            src={leftArrow}
            alt="left-arrow"
            ref={this.arrowImage}
          />
        )}
      </div>
    );
  }
}
