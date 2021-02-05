import React, { Component } from "react";
import SliderContent from "./SliderContent";
import "./Slider.css";
import Slide from "./Slide";
import Arrow from "./Arrow";

export default class Slider extends Component {
  state = {
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  };

  nextSlide = () => {
    if (this.state.activeIndex === this.props.slides.length - 1) {
      return this.setState({
        ...this.state,
        translate: 0,
        activeIndex: 0,
        transition: 0,
      });
    }

    this.setState({
      ...this.state,
      activeIndex: this.state.activeIndex + 1,
      translate: (this.state.activeIndex + 1) * this.getWidth(),
      transition: 0.45,
    });
  };

  prevSlide = () => {
    if (this.state.activeIndex === 0) {
      return this.setState({
        ...this.state,
        translate: (this.props.slides.length - 1) * this.getWidth(),
        activeIndex: this.props.slides.length - 1,
        transition: 0,
      });
    }

    this.setState({
      ...this.state,
      activeIndex: this.state.activeIndex - 1,
      translate: (this.state.activeIndex - 1) * this.getWidth(),
      transition: 0.45,
    });
  };

  getWidth = () => {
    return window.innerWidth;
  };

  // Autoplay
  // componentDidMount() {
  //   setInterval(this.nextSlide, 3000);
  // }

  render() {
    const { translate, transition } = this.state;

    return (
      <div className="slider">
        <SliderContent
          translate={translate}
          transition={transition}
          width={this.getWidth() * this.props.slides.length}
        >
          {this.props.slides.map((slide, i) => (
            <Slide key={slide + i} content={slide} />
          ))}
        </SliderContent>
        <Arrow direction="left" handleClick={this.prevSlide} />
        <Arrow direction="right" handleClick={this.nextSlide} />
      </div>
    );
  }
}
