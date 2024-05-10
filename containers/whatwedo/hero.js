import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, Dflex as DflexGlobal, SectionTitle as SectionTitleGlobal,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import Container from '../../components/container'
import {isMobile} from "react-device-detect"
import { connect } from 'react-redux'

const HeroSvgWrapper = styled.div`
    max-width:669px;
    padding-right:89px;
`;
const SectionTitle = styled(SectionTitleGlobal)`
    
`;
const TextWrapper = styled.div`
    padding-top:320px;
    padding-bottom:106px;
    position:relative;
    z-index:1;
    max-width:1040px;
    @media (max-width:767.98px){
        width:100%;
        text-align:center;
        padding-top:202px;
        padding-bottom:20px;
    }
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        text-align:center;
        padding-bottom:50px;
        padding-top:200px;
    }
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    font-size:18px;
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

const Dflex = styled(DflexGlobal)`
    max-width:1040px;
    margin-left:auto;
    margin-right:auto;
    @media (max-width : 767.98px){
        flex-direction:column;
    }
`;
const HomeSVG = styled.div`
    position :absolute;
    top:138px;
    left :30px;
    width :1168px;
    height:685px;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat;
    background-image:url('/static/images/whatwedo/hero_desktop.svg');
    @media (max-width:767.98px){
        width:100%;
    } 
`;

class Hero extends React.Component {
    render(){
        let title = "",
        desc = "";
        let classScroll = "";
        if (this.props.isInViewport) {
			classScroll = "view-in";
		} 
        if(typeof this.props.wwd[0] !== "undefined"){
            title = this.props.wwd[0].Hero_title,
            desc = this.props.wwd[0].Hero_desc;
        }
        return(
            <Section id="home-hero" className={classScroll}>
                <Container>
                    <HomeSVG/>
                    
                    
                    <Dflex>
                        
                        <TextWrapper>
                            <SectionTitle>{title}</SectionTitle>
                            <ParagraphText>{desc}</ParagraphText>
                        </TextWrapper>
                        
                    </Dflex>
                </Container>
            </Section>
        )
    }
}
const mapStateToProps = state => {
    return { wwd:state.wwd};
  };

  
  export default connect(mapStateToProps,null)(Hero)
  