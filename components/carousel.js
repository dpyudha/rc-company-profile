import React from "react";
import styled from "styled-components";
import TriangleDottedSvgGlobal from "../static/images/img_triangle_1.svg";
import PurpleCircleGlobal from "../static/images/img_purple_shape.svg";
import GreenCircleGlobal from "../static/images/img_halfcircle_green.svg";
import { SectionSubTitle, ParagraphTextLg } from "./content";

import Slider from "react-slick";
import { connect } from "react-redux";
import { setCarousel } from "../actions/actions";

const GreenCircle = styled.div`
  position: absolute;
  width: 138px;
  height: 139px;
  right: 110px;
  z-index: 2;
  bottom: 91px;
  transition: all cubic-bezier(0.7, 0, 0.3, 1) 0.5s;
  svg {
    width: 100%;
  }

  @media (max-width: 991.98px) {
    bottom: 360px;
    right: 0px;
  }
  @media (max-width: 767.98px) {
    bottom: 280px;
    width: 90px;
    height: 90px;
  }
`;
const TriangleDottedSvg = styled.div`
  position: absolute;
  width: 140px;
  height: 155px;
  right: 110px;
  top: 24px;
  svg {
    width: 100%;
  }
  @media (max-width: 991.98px) {
    right: 0;
    top: 44px;
  }
  @media (max-width: 767.98px) {
    width: 78px;
    height: 87px;
    top: 20px;
  }
`;
const PurpleCircle = styled.div`
  position: absolute;
  width: 250px;
  height: 125px;
  left: 50px;
  top: 247px;
  svg {
    width: 100%;
  }
  @media (max-width: 991.98px) {
    left: 0;
  }
  @media (max-width: 767.98px) {
    width: 180px;
    top: 120px;
    height: auto;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 476px);
  position: relative;
  flex-wrap: wrap;

  .slick-slider {
    width: 100%;
  }
  .slick-list {
    overflow: visible;
  }
  .slick-slide {
    opacity: 0;
    transition: opacity ease-out 0.3s;
    &.slick-active {
      opacity: 1;
    }
  }

  .slick-dots {
    margin-top: 30px;
    position: relative;
    bottom: 0;
  }
  .slick-dots li {
    width: auto;
    margin: 0 10px;
    button {
      width: 30px;
      height: 6px;
      border-radius: 3px;
      background-color: #dbdbff;
      padding: 0;
      transition: all ease-out 0.3s;
      &:before {
        display: none;
      }
    }
    &.slick-active {
      button {
        width: 60px;
        background-color: #4544e6;
      }
    }
  }
`;
const SliderSlide = styled.div``;
const SliderItem = styled.div`
  width: auto;
  max-height: 642px;
  height: 80vh;
  border-radius: 20px;
  background-color: #5a5ef0;
  position: relative;
  margin: 0 100px;
  z-index: 1;
  @media (max-width: 991.98px) {
    margin: 0;
  }
  @media (max-width: 767.98px) {
    height: 373px;
  }
`;

const TextWrapper = styled.div`
  padding-top: 45px;
  text-align: center;
  padding-bottom: 20px;
  display: none;
  @media (max-width: 991.98px) {
    display: block;
  }
`;
class Carousel extends React.Component {
  state = {
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0,
    moving: false,
  };
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  handleScroll = (e) => {
    if (e.deltaX > 0 || e.deltaY < 0) {
      if (!this.state.moving) {
        // this.previous();
      }
    } else if (e.deltaX < 0 || e.deltaY > 0) {
      if (!this.state.moving) {
        // this.next();
      }
    }
  };
  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };
  componentDidMount = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sliderActive", 0);
    }
    // this.props.dispatch(setCarousel(1));
    console.log("dddd", this.props.homesliders);
  };
  renderSlider = (dt, i) => {
    return (
      <div key={i}>
        <SliderItem />
        <TextWrapper>
          <SectionSubTitle>{dt.Project_name}</SectionSubTitle>
          <ParagraphTextLg>
            {dt.Short_description}
          </ParagraphTextLg>
        </TextWrapper>
      </div>
    );
  };
  render() {
    var that = this;
    var settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 800,
      cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      loop: true,
      interval: 1000,
      centerPadding: "70px",
      afterChange: (current, next) => {
        this.props.dispatch(setCarousel(current));
      },
      responsive: [
        {
          breakpoint: 992,
          settings: {
            centerPadding: "40px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: "20px",
          },
        },
      ],
    };
    let gactiveStyle = {
      transform: "rotate(" + this.state.oldSlide * 40 + "deg)",
    };
    //   console.log(this.state.activeSlide)
    return (
      <SliderWrapper>
        <GreenCircle style={gactiveStyle}>
          <GreenCircleGlobal />
        </GreenCircle>
        <TriangleDottedSvg>
          <TriangleDottedSvgGlobal />
        </TriangleDottedSvg>
        <PurpleCircle>
          <PurpleCircleGlobal />
        </PurpleCircle>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.props.homesliders.length > 0 &&
            this.props.homesliders.map(this.renderSlider)}

        </Slider>
      </SliderWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    activeCarousel: state.activeCarousel,
    homesliders: state.homesliders,
  };
};

export default connect(mapStateToProps)(Carousel);
