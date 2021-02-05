import React, { Component } from "react";
import "./SliderContent.css";

export default class SliderContent extends Component {
  constructor(props) {
    super(props);
    this.sliderContent = React.createRef();
  }

  componentDidMount() {
    this.sliderContent.current.style.transition = `transform ease-out ${this.props.transition}s`;
    this.sliderContent.current.style.transform = `translateX(-${this.props.translate}px)`;
    this.sliderContent.current.style.width = `${this.props.width}px`;
  }

  componentDidUpdate() {
    this.sliderContent.current.style.transition = `transform ease-out ${this.props.transition}s`;
    this.sliderContent.current.style.transform = `translateX(-${this.props.translate}px)`;
    this.sliderContent.current.style.width = `${this.props.width}px`;
  }

  render() {
    // this.sliderContent.current.style.transition = `transform ease-out ${this.props.transition}s`;
    // this.sliderContent.current.style.width = `${this.props.width}px`;
    console.log("SliderContent rendered");

    return (
      <div className="slider-content" ref={this.sliderContent}>
        {this.props.children}
      </div>
    );
  }
}
