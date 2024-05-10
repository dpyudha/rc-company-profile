import React from "react";
import styled from "styled-components";
import {
  Section as SectionGlobal,
  Dflex as DflexGlobal,
  ParagraphTextMedium as ParagraphTextMediumGlobal,
  ParagraphText as ParagraphTextGlobal,
  TextTitle as TextTitleGlobal,
  SectionSubTitle as SectionSubTitleGlobal,
} from "../../components/content";
import ContainerGlobal from "../../components/container";
import { connect } from "react-redux";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";

const Section = styled(SectionGlobal)`
  height: auto;
  padding-top: 102px;
  overflow: hidden;
  padding-bottom: 160px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 80px;
  }
`;
const Container = styled(ContainerGlobal)`
  max-width: 1170px;
`;
const TextTitle = styled(TextTitleGlobal)``;
const Desc = styled.p`
  color: #2b304d;
  font-size: 20px;
  letter-spacing: 0.5px;
  line-height: 40px;
  font-family: "Airbnb Cereal App Light", sans-serif;
`;
const Dflex = styled(DflexGlobal)`
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
  > div {
    &:first-child {
      flex: 0 0 216px;
      max-width: 216px;
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
    &:last-child {
      flex: 0 0 670px;

      text-align: left;
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex: 0 0 100%;
        max-width: 100%;
        text-align: center;
        margin-top: 20px;
      }
    }
  }
`;

const ProcessWrapper = styled(DflexGlobal)`
  padding-top: 181px;
  padding-bottom: 77px;
  cursor: pointer;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 80px;
    padding-bottom: 50px;
  }
  .process {
    &-img {
      height: 164px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 19px;
      position: relative;
      .process-img__hover {
        position: absolute;
        transition: all cubic-bezier(0.16, 1.11, 0.45, 0.97) 0.4s;
        opacity: 0;
      }
      &:hover,
      &.active {
        .process-img__hover {
          opacity: 1;
        }
      }
    }
  }
  > div {
    flex: 0 0 20%;
    text-align: center;
    position: relative;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex: 0 0 100%;
      margin-bottom: 140px;
      &:nth-child(2),&:nth-child(3){
          margin-bottom:40px;

      }
      &:nth-child(4){
          margin-bottom:100px;
      }
      &:nth-child(5){
          margin-bottom:0;
      }
    }
    &:first-child {
      @media (min-width: 992px) {
        text-align: left;
        .process-img {
          justify-content: flex-start;
        }
      }
    }
    &:first-child,
    &:nth-child(4) {
      &:after {
        content: "";
        display: block;
        width: 84px;
        height: 15px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("/static/images/whatwedo/arrow-short.svg");
        position: absolute;
        top: 80px;
        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            transform:rotate(90deg);
            top:auto;
            bottom:-60px;
            left:0;
            right:0 !important;
            margin:0 auto;
        }
      }
    }
    &:first-child {
      &:after {
        right: -30px;
      }
    }
    &:nth-child(3) {
      &:after,
      &:before {
        content: "";
        display: block;
        position: absolute;
        width: 174px;
        height: 63px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("/static/images/whatwedo/arrow-round.svg");
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      &:before {
        top: -50px;
        transform: rotate(-180deg);
        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            transform:rotate(90deg);
            left:-200px;
            top:50px;
        }
      }
      &:after {
        bottom: -50px;
        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            transform:rotate(-90deg);
            left:180px;
            top:50px;
        }
      }
    }
    &:nth-child(4) {
      &:after {
        right: -50px;
      }
    }
    &:nth-child(2) {
      &:after {
        content: "";
        display: block;
        width: 234px;
        height: 18px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("/static/images/whatwedo/arrow-long.svg");
        position: absolute;
        right: -100%;
        top: 80px;
        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            transform:rotate(90deg);
            top:auto;
            bottom:-130px;
            left:0;
            right:0;
            margin:0 auto;
        }
      }
    }
  }
`;
const SectionSubTitle = styled(SectionSubTitleGlobal)`
  color: #2b304d;
`;
const SliderWrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  .slick-slide {
    
    &[data-index='1']{
        .slider-item {
            &:after {
                background-image: url("/static/images/whatwedo/process_card_img__ideation.png");
                right:-15px;
            }
        }

    }
    &[data-index='3']{
        .slider-item {
            &:after {
                background-image: url("/static/images/whatwedo/process_card_img__extraction.png");
                width:90px;
            }
        }

    }
    &[data-index='4']{
        .slider-item {
            &:after {
                background-image: url("/static/images/whatwedo/process_card_img__deliver.png");
                right:-18px;
            }
        }

    }
  }
  .slick-active {
    &[data-index='0']{
        .slider-item {
            background-color:#005379;
        }

    }
    &[data-index='1']{
        .slider-item {
            background-color:#1E227F;
        }

    }
    &[data-index='3']{
        .slider-item {
            background-color:#4F39AC;
        }

    }

    &[data-index='4']{
        .slider-item {
            background-color:#0C5B32;
        }

    }
    
    .slider-item {
      background-color: #0b8ec8;
      h4,
      p {
        color: #ffffff;
      }
    }
  }
  .slick-list {
    overflow: visible;
  }
`;
const SliderItem = styled.div`
  padding: 30px 40px;
  background-color: #e9eaff;
  border-radius: 33px;
  min-height: 400px;
  position: relative;
  transition: all ease 0.5s;
  margin: 0 27px;
  overflow:hidden;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 10px;
    padding: 30px;
  }
  h4 {
    margin-bottom: 34px;
    color: #2a2f4c;
    letter-spacing: 1px;
  }
  > p {
    margin-bottom: 30px;
  }
  p {
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 33px;
    color: #687089;
  }
  ul {
    display: flex;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
    li {
      flex: 0 0 50%;
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex: 0 0 100%;
        margin-bottom: 10px;
      }
    }
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 198px;
    height: 191px;
    bottom: 0;
    right: 0;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/static/images/whatwedo/process_card_img.png");
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 100px;
      height: 100px;
      right: 30px;
      bottom: 30px;
    }
  }
`;
const ParagraphText = styled(ParagraphTextGlobal)``;
const ParagraphTextMedium = styled(ParagraphTextMediumGlobal)``;
class Process extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      updateCount: 0,
    };
  }
  renderList = (dt, i) => {
    const tags = dt.tags.split(",");
    return (
      <div key={i}>
        <SliderItem className="slider-item">
          <TextTitle>{dt.title}</TextTitle>
          <ParagraphText>
           {dt.description}
          </ParagraphText>
          <ul>
            {
                tags.length > 0 &&
                tags.map((tag,index) => {
                    return <li key={index}><ParagraphTextMedium>{tag}</ParagraphTextMedium></li>
                })
            }
           
          </ul>
        </SliderItem>
      </div>
    );
  };
  render() {
    let title = "",
      desc = "",
      subtitle = "";
    var settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      loop: true,
      centerPadding: "0px",
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => {
        this.setState({ slideIndex: next });
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

    if (typeof this.props.wwd[0] !== "undefined") {
      (title = this.props.wwd[0].Wwd_title),
        (desc = this.props.wwd[0].Wwd_desc),
        (subtitle = this.props.wwd[0].Wwd_subtitle);
    }
    return (
      <Section id="home-hero">
        <Container>
          <Dflex>
            <div>
              <TextTitle>{title}</TextTitle>
            </div>
            <div>
              <Desc>{desc}</Desc>
            </div>
          </Dflex>
          <ProcessWrapper>
            <div onClick={(e) => this.slider.slickGoTo(0)}>
              <div className="process-wrapper">
                <div
                  className={`process-img ${
                    this.state.slideIndex === 0 ? "active" : ""
                  }`}
                >
                  <img
                    src="/static/images/whatwedo/img_identification_teal.svg"
                    alt=""
                  />
                  <img
                    className="process-img__hover"
                    src="/static/images/whatwedo/img_identification_active.svg"
                    alt=""
                  />
                </div>
                <SectionSubTitle>IDENTIFICATION</SectionSubTitle>
              </div>
            </div>
            <div onClick={(e) => this.slider.slickGoTo(1)}>
              <div className="process-wrapper">
                <div
                  className={`process-img ${
                    this.state.slideIndex === 1 ? "active" : ""
                  }`}
                >
                  <img
                    src="/static/images/whatwedo/img_ideation_teal.svg"
                    alt=""
                  />
                  <img
                    className="process-img__hover"
                    src="/static/images/whatwedo/img_ideation_active.svg"
                    alt=""
                  />
                </div>
                <SectionSubTitle>IDEATION</SectionSubTitle>
              </div>
            </div>
            <div onClick={(e) => this.slider.slickGoTo(2)}>
              <div className="process-wrapper">
                <div
                  className={`process-img ${
                    this.state.slideIndex === 2 ? "active" : ""
                  }`}
                >
                  <img
                    src="/static/images/whatwedo/img_Validation_teal.svg"
                    alt=""
                  />
                  <img
                    className="process-img__hover"
                    src="/static/images/whatwedo/img_Validation_active.svg"
                    alt=""
                  />
                </div>
                <SectionSubTitle>VALIDATION</SectionSubTitle>
              </div>
            </div>
            <div onClick={(e) => this.slider.slickGoTo(3)}>
              <div className="process-wrapper">
                <div
                  className={`process-img ${
                    this.state.slideIndex === 3 ? "active" : ""
                  }`}
                >
                  <img
                    src="/static/images/whatwedo/img_extraction_teal.svg"
                    alt=""
                  />
                  <img
                    className="process-img__hover"
                    src="/static/images/whatwedo/img_extraction_active.svg"
                    alt=""
                  />
                </div>
                <SectionSubTitle>EXTRACTION</SectionSubTitle>
              </div>
            </div>
            <div onClick={(e) => this.slider.slickGoTo(4)}>
              <div className="process-wrapper">
                <div
                  className={`process-img ${
                    this.state.slideIndex === 4 ? "active" : ""
                  }`}
                >
                  <img
                    src="/static/images/whatwedo/img_deliver_teal.svg"
                    alt=""
                  />
                  <img
                    className="process-img__hover"
                    src="/static/images/whatwedo/img_deliver_active.svg"
                    alt=""
                  />
                </div>
                <SectionSubTitle>DELIVER</SectionSubTitle>
              </div>
            </div>
          </ProcessWrapper>
          <SliderWrapper>
          
            <Slider ref={(c) => (this.slider = c)} {...settings}>
                {this.props.wwdprocess.length > 0 &&
                this.props.wwdprocess.map(this.renderList)}
            </Slider>
          </SliderWrapper>
        </Container>
      </Section>
    );
  }
}
const mapStateToProps = (state) => {
  return { wwd: state.wwd, wwdprocess: state.wwdprocess };
};

export default connect(mapStateToProps, null)(Process);
