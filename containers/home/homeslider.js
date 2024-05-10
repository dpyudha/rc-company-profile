import React from "react";
import styled from "styled-components";
import {
  Section as SectionGlobal,
  Dflex as DflexGlobal,
  SectionSubTitle,
  ParagraphTextLg,
} from "../../components/content";
import Container from "../../components/container";
import PuzzleSvgGlobal from "../../static/images/img_puzzle_pink.svg";
import TriangleDottedSvgGlobal from "../../static/images/img_triangle_1.svg";
import PurpleCircleGlobal from "../../static/images/img_purple_shape.svg";
import GreenCircleGlobal from "../../static/images/img_halfcircle_green.svg";
import { Watch } from "scrollmonitor-react";
import Slider from "react-slick";

import { connect } from "react-redux";
const Section = styled(SectionGlobal)`
  overflow: hidden; 
  align-items: center;
  @media (max-width: 991.98px) {
    padding-top: 30px;
    padding-bottom: 30px;
    align-items: flex-start;
    height: auto;
  }
  .svg-puzzle,.slider-text,.slider-images,.svg-green-circle,.svg-triangle,.svg-purple-circle {
    opacity:0;
    transition:all ease .6s;
  }
  .slider-text {
    transform:translateX(-50px);
  }
  .svg-puzzle {
    transform:translateX(-50px) rotate(60deg);
  }
  
  .svg-green-circle {
    transform:translateX(80px) rotate(60deg) scale(0.9);
  }
  .svg-triangle {
    transform:translate(100px,-20px) rotate(30deg) scale(0.9);
  }
  .svg-purple-circle{
    transform:translate(-120px,-50px) rotate(-40deg) scale(0.9);
  }
  &.view-in {
    .svg-puzzle,.slider-text,.slider-images,.svg-green-circle,.svg-triangle,.svg-purple-circle {
      opacity:1;
    }
    .slider-text {
      transform:translateX(0px);
    }
    .svg-green-circle,.svg-triangle,.svg-purple-circle {
      transform:translate(0px,0px) rotate(0deg) scale(1);
    }
    .svg-puzzle {
      transform:translate(0px,50px) rotate(0deg);
    }
  }
`;
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
  position: relative;
  margin: 0 100px;
  z-index: 1;
  overflow: hidden;
  @media (max-width: 991.98px) {
    margin: 0;
  }
  @media (max-width: 767.98px) {
    height: 373px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextWrapperSlider = styled.div`
  padding-top: 45px;
  text-align: center;
  padding-bottom: 20px;
  display: none;
  @media (max-width: 991.98px) {
    display: block;
  }
`;
const TextWrapper = styled.div`
  max-width: 476px;
  padding-bottom: 236px;
  position: relative;
  @media (max-width: 991.98px) {
    padding-bottom: 0;
    display: none;
  }
`;
const Dflex = styled(DflexGlobal)`
  padding-left: 56px;
  align-items: flex-end;
  flex-wrap: wrap;

  @media (max-width: 991.98px) {
    padding-left: 0;
    > div {
      flex: 0 0 100%;
      max-width: 100%;
      width: 100%;
    }
  }
`;

const PuzzleSvg = styled(PuzzleSvgGlobal)`
  position: absolute;
  top: -310px;
  right: 50px;
`;
const TextSlider = styled.div``;
const TextSliderWrapper = styled.div`
  > div {
    h6,
    p {
      transition: all cubic-bezier(0.7, 0, 0.3, 1) 0.8s;
    }
    h6 {
      transform: translateY(-20px);
      opacity: 0;
    }
    p {
      transform: translateX(-40px);
      opacity: 0;
    }
    &:not(:first-child) {
      position: absolute;
      top: 0;
      left: 0;
    }
    &.active {
      h6,
      p {
        opacity: 1;
      }
      p {
        transform: translateX(0px);
      }
      h6 {
        transform: translateY(0px);
      }
    }
  }
`;
class HomeSlider extends React.Component {
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
  };
  renderSlider = (dt, i) => {
    return (
      <div
        key={i}
        className={`${this.state.activeSlide === i ? "active" : ""}`}
      >
        <SliderItem>
          <img
            src={
              typeof dt.Image_cover !== "undefined"
                ? process.env.API_ENDPOINT + dt.Image_cover.url
                : ""
            }
          />
        </SliderItem>
        <TextWrapperSlider>
          <SectionSubTitle>{dt.Project_name}</SectionSubTitle>
          <ParagraphTextLg>{dt.Short_description}</ParagraphTextLg>
        </TextWrapperSlider>
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
      beforeChange: (current, next) => {
          console.log(current,next)
          this.setState({"activeSlide":''})
          setTimeout(function(){
            this.setState({"activeSlide":next})
          }.bind(this),800)
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
    let classScroll = "";
    if (this.props.isInViewport) {
			classScroll = "view-in";
    } 
    return (
      <Section className={classScroll}>
        <Container>
          <Dflex>
            <TextWrapper>
              <PuzzleSvg className="svg-puzzle"/>
              <TextSliderWrapper className="slider-text">
                {this.props.homesliders.length > 0 &&
                  this.props.homesliders.map((dt, i) => {
                    return (
                      <TextSlider
                        key={i}
                        className={`${
                          this.state.activeSlide === i ? "active" : ""
                        }`}
                      >
                        <SectionSubTitle>{dt.Project_name}</SectionSubTitle>
                        <ParagraphTextLg>
                          {dt.Short_description}
                        </ParagraphTextLg>
                      </TextSlider>
                    );
                  })}
              </TextSliderWrapper>
            </TextWrapper>
            <SliderWrapper className="slider-images">
              <GreenCircle className="svg-green-circle">
                <GreenCircleGlobal />
              </GreenCircle>
              <TriangleDottedSvg className="svg-triangle">
                <TriangleDottedSvgGlobal />
              </TriangleDottedSvg>
              <PurpleCircle className="svg-purple-circle">
                <PurpleCircleGlobal />
              </PurpleCircle>
              <Slider ref={(c) => (this.slider = c)} {...settings}>
                {this.props.homesliders.length > 0 &&
                  this.props.homesliders.map(this.renderSlider)}
              </Slider>
            </SliderWrapper>
          </Dflex>
        </Container>
      </Section>
    );
  }
}

const mapStateToProps = (state) => {
  return { homesliders: state.homesliders };
};

export default connect(mapStateToProps, null)(Watch(HomeSlider));
