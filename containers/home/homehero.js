import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, DflexCenter as DflexCenterGlobal, SectionTitle,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import Container from '../../components/container'
import HeroSvg from '../../static/images/img-hero-homepage.svg'
import { Watch } from 'scrollmonitor-react';
const HeroSvgWrapper = styled.div`
    max-width:650px;
    padding-right:29px;
    
    svg {
        width :100%;
        @media (max-width:991.98px){
            margin-bottom:50px;
        }
        @media (max-width:575.98px){
            height:auto;
            margin-bottom:40px;
            max-width:327px;
            margin-left:auto;
            margin-right:auto;
        }
    }
    @media (max-width:991.98px){
        max-width:100%;
        padding-right:0;

    }
`;
const TextWrapper = styled.div`
    flex : 0 0 523px;
    @media (max-width:991.98px){
        text-align:center;
    }
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    
`;
const Section = styled(SectionGlobal)`
    padding-top:36px;
    padding-bottom:36px;
    min-height:calc(100vh - 121px);
    display:flex;
    align-items:center;
    overflow:hidden;
    @media (max-width:991.98px){
        align-items:flex-start;
        height:auto;
        min-height:auto;
        padding-top:135px;
    }
    @media (max-width:767.98px){
        min-height:auto;
        padding-top:105px;
    }
    
    .hero-svg,.hero-title,.hero-text {
        opacity:0;
        transition:all ease .6s;
    }
    .hero-title {
        transform:translateX(30px);
        
    }
    .hero-text {
        transform:translateY(30px);
    }
    .hero-svg {
        transform:translateX(-30px);
    }
    &.view-in {
        .hero-svg,.hero-title,.hero-text{
            opacity:1;
        }
        .hero-title {
            transform:translateX(0px);
        }
        .hero-text {
            transform:translateY(0px);
        }
        .hero-svg {
            transform:translateX(0px);
        }
    }
`;

const DflexCenter = styled(DflexCenterGlobal)`
    flex-wrap:wrap;
    >div{
        @media (max-width:991.98px){
            flex:0 0 100%;
            max-width:100%;
        }
    }

`;

class HomeHero extends React.Component {
    constructor(props){
        super(props);
        
    }
    
    render(){
        let classScroll = "";
        if (this.props.isInViewport) {
			classScroll = "view-in";
		} 
        return(
            <Section id="home-hero" className={classScroll}>
                <Container>
                    <DflexCenter>
   
                        <HeroSvgWrapper>
                            <HeroSvg className="hero-svg"/>
                            
                        </HeroSvgWrapper>
                        <TextWrapper>
                        <SectionTitle className="hero-title">{this.props.title}</SectionTitle>
                            <ParagraphText className="hero-text">
                            {this.props.desc}
                            </ParagraphText>
                        </TextWrapper>
                        
                    </DflexCenter>
                </Container>
            </Section>
        )
    }
}

export default Watch(HomeHero)