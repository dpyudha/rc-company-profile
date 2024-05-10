import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, DflexCenter as DflexCenterGlobal, SectionTitleSmall,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import ContainerGlobal from '../../components/container'
import { connect } from 'react-redux'
import LazyLoad from "react-lazyload";

const Container = styled(ContainerGlobal)`
    max-width:1250px;
`;
const HeroSvgWrapper = styled.div`
    max-width:569px;
    padding-right:138px;
    flex:0 0 569px;
    img {
        width:100%;
    }
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        flex:0 0 100%;
        max-width:100%;
        text-align:center;
        padding-right :0;
        margin-bottom:40px;
        img {
            max-width:70%;
        }
    }
`;
const TextWrapper = styled.div`
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        text-align:center;
    }

`;
const ParagraphText = styled(ParagraphTextGlobal)`
    max-width:493px;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        max-width:100%;
    }
`;
const Section = styled(SectionGlobal)`
    padding-top:75px;
    padding-bottom:75px;
    height:auto;
    display:flex;
    align-items:center;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        padding-top:40px;
        padding-bottom:40px;
    }
`;

const DflexCenter = styled(DflexCenterGlobal)`
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        flex-wrap:wrap;
    }
    @media (max-width : 767.98px){
        flex-direction:column;
    }
`;

class StudioContent extends React.Component {
    render(){
        let title = "",
        desc = "";
        if(typeof this.props.studio[0] !== "undefined"){
            title = this.props.studio[0].Section_two_title,
            desc = this.props.studio[0].Section_two_desc;
        }
        return(
            <Section id="home-hero">
                <Container>
                    <DflexCenter>
                        <HeroSvgWrapper>
                            <LazyLoad><img src="/static/images/studio-img-2.png" alt="img"/></LazyLoad>
                        </HeroSvgWrapper>
                        <TextWrapper>
                            <SectionTitleSmall>{title}</SectionTitleSmall>
                            <ParagraphText>
                                {desc}
                            </ParagraphText>
                            
                        </TextWrapper>
                        
                    </DflexCenter>
                </Container>
            </Section>
        )
    }
}
const mapStateToProps = state => {
    return { studio:state.studio};
  };

  
  export default connect(mapStateToProps,null)(StudioContent)