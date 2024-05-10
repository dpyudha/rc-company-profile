import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, DflexCenter as DflexCenterGlobal, SectionTitle,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import Container from '../../components/container'
import HeroSvg from '../../static/images/works/img-header-bg.svg'
import HeroSvgMobile from '../../static/images/works/img-header-bg-mobile.svg'
import { connect } from 'react-redux'

import {isMobile} from "react-device-detect"
const HeroSvgWrapper = styled.div`
    max-width:669px;
    padding-right:89px;
`;
const TextWrapper = styled.div`
    padding-top:254px;
    padding-bottom:106px;
    position:relative;
    z-index:1;
    width:730px;
    
    @media (max-width:767.98px){
        width:100%;
        text-align:center;
        padding-top:202px;
        padding-bottom:20px;
    }
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    max-width:493px;
`;
const Section = styled(SectionGlobal)`
    
    height:auto;
    display:flex;
    align-items:center;
    position :relative;
    overflow:hidden;
    @media (max-width : 767.98px){
        padding-bottom:100px;
    }
`;

const DflexCenter = styled(DflexCenterGlobal)`
    @media (max-width : 767.98px){
        flex-direction:column;
    }
`;
const HomeSVG = styled(HeroSvg)`
    position :absolute;
    bottom:0;
    left :100px;
    width :1168px;
    @media (max-width:767.98px){
        width:100%;
    } 
`;
const HomeSvgMobile = styled(HeroSvgMobile)`
    position:absolute;
    top:0;
    left:-30px;
    width:100%;
`;

class Hero extends React.Component {
    render(){
        let title = "";
        if(typeof this.props.works[0] !== "undefined"){
            title = this.props.works[0].Title;
        }
        return(
            <Section id="home-hero">
                <Container>
                    {
                        isMobile ?
                        <HomeSvgMobile/>
                        :
                        <HomeSVG/>
                    }
                    
                    <DflexCenter>
                        
                        <TextWrapper>
                            <SectionTitle>{title}</SectionTitle>
                            
                        </TextWrapper>
                        
                    </DflexCenter>
                </Container>
            </Section>
        )
    }
}
const mapStateToProps = state => {
    return { works:state.works};
  };

  
  export default connect(mapStateToProps,null)(Hero)