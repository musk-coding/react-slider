import React, { Component } from "react";
import "./Slide.css";

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.slide = React.createRef();
  }

  componentDidMount() {
    this.slide.current.style.backgroundImage = `url(${this.props.content})`;
  }

  render() {
    return <div className="slide" ref={this.slide}></div>;
  }
}
