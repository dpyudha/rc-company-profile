import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, Dflex as DflexGlobal,ParagraphTextMedium as ParagraphTextMediumGlobal, ParagraphText as ParagraphTextGlobal,SectionTitle as SectionTitleGlobal} from '../../components/content'
import ContainerGlobal from '../../components/container'
import { connect } from 'react-redux'
import Slider from "react-slick";



const Section = styled(SectionGlobal)`
    height:auto;
    padding-top:102px;
    overflow:hidden;
    padding-left:340px;
    padding-bottom:160px;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        padding-top:0px;
        padding-left:0;
        padding-bottom:50px;
    }
`;
const Container = styled(ContainerGlobal)`
    max-width:1170px;
    position:relative;
    &:after {
        content :"";
        position:absolute;
        width:200px;
        height:600px;
        background:#edf3fc;
        display:none;
        top:-60px;
        left:-340px;
        @media (min-width:992px){
            display:block;
        }
    }
`;



const SliderWrapper = styled.div`
    margin-left:0px;
    margin-top:80px;
    z-index:2;
    position:relative;
    margin-left:-15px;
    marign-right:-15px;
    
    .slick-list{
        overflow:visible;
    }
    
    .slick-slide{
        padding-left:15px;
        padding-right:15px;
        @media (max-width:575.98px){
            max-width:300px;
        }
    }
    .slick-next,.slick-prev {
        z-index: 1000;
        width:50px;
        height :48px;
        border-radius:50px;
        background:#fff;
        background-size: 20px;
        background-position:center;
        background-repeat:no-repeat;
        box-shadow:0px 10px 25px rgba(0,0,0,0.3);
        &.slick-disabled {
            opacity:.8;
            background-color:#eee;
        }
        &:before {
            display:none;
        }
    }
    .slick-next {
        right: 200px;
        background-image:url('/static/images/icon-next.svg');
        
        @media (max-width:991.98px){
            right:20px;
        }
    
    }
    .slick-prev {
        background-image:url('/static/images/icon-back.svg');
        @media (max-width:991.98px){
            left:30px;
        }
        
    }
`;
const SliderItem = styled.div`
    img{
        width:100%;
    }
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    max-width:600px;
    color:#687089;
    @media (max-width:575.98px){
        font-size:14px;
        line-height:26px;
    }

`;

const SectionTitle = styled(SectionTitleGlobal)`
    font-size:48px;
    line-height:58px;
    @media (max-width:575.98px){
        font-size:32px;
        line-height:38px;
        margin-bottom:20px;
    }
`;
class SliderEl extends React.Component {
    renderList = (dt,i) => {
        let images = process.env.API_ENDPOINT+dt.url;
        return (
            
            <div key={i}>
                <SliderItem className="slider-item">
                    <img src={images} alt={dt.name}/>
                </SliderItem>
            </div>
            
        )
    }
    render(){
        var settings = {
            dots: false,
            arrows:true,
            infinite: false,
            speed: 800,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            loop:true,
            centerPadding:"0px",
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                  }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                  },
            ]

          };
         
        let title = "",
        subtitle = "";
        if(typeof this.props.workslistsingle.Hero_title !== "undefined"){
            title = this.props.workslistsingle.Slider_title;
            subtitle = this.props.workslistsingle.Slider_subtitle;
               
        }
        return(
            <Section>
                <Container>
                    <SectionTitle>{title}</SectionTitle>
                    <ParagraphText>{subtitle}</ParagraphText>
                    <SliderWrapper>
                        <Slider ref={c => (this.slider = c)} {...settings} >
                            {   typeof this.props.workslistsingle.Slider_images !== "undefined" &&
                                this.props.workslistsingle.Slider_images.length > 0 &&
                                this.props.workslistsingle.Slider_images.map(this.renderList)
                            }
                            
                            
                        </Slider>
                    </SliderWrapper>
                </Container>
            </Section>
        )
    }
}

const mapStateToProps = state => {
    return { workslistsingle:state.workslistsingle};
  };

  
  export default connect(mapStateToProps,null)(SliderEl)