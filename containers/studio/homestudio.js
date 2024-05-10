import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, Dflex as DflexGlobal, SectionTitle,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import ContainerGlobal from '../../components/container'
import ImgDoubleCircle from '../../static/images/img-double-circle.svg'
import HeroOrnament from '../../static/images/studio/img_hero_ornament.svg'
import { connect } from 'react-redux'
import LazyLoad from "react-lazyload";
const HeroSvgWrapper = styled.div`
    max-width:669px;
    padding-right:89px;

`;
const TextWrapper = styled.div`
    padding :0 20px;
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    max-width:493px;
`;
const Section = styled(SectionGlobal)`
    padding-top:270px;
    padding-bottom:77px;
    display:flex;
    align-items:center;
    overflow:hidden;
    
    height:100%;
    @media (max-width: ${({theme}) => theme.breakpoints.lg}){
        padding-top:200px;
    }
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        padding-top:175px;
        overflow:hidden;
        padding-bottom:40px;
    }
`;

const Dflex = styled(DflexGlobal)`
    justify-content:flex-end;
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        justify-content:flex-start;
    }
`;

const HeaderOrnament = styled.div`
    text-align:right;
    
    img {
        height:500px;
        @media (max-width: ${({theme}) => theme.breakpoints.md}){
            height:auto;
            width :90%;
        }
        @media (max-width: ${({theme}) => theme.breakpoints.sm}){
            height:250px;
            left:-80px;
            width:auto;
            position:relative;
        }
    }
    

`;
const Container = styled(ContainerGlobal)`
    padding:0;
    max-width:1440px;
`;
const SectionTitleC = styled(SectionTitle)`
    position:relative;
    right:-160px;
    line-height:54px;
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        z-index:2;
        right:18px;
        font-size:48px;
        left:18px;
        top:-20px;
        
    }
`;
const ParagraphTextC = styled(ParagraphText)`
    max-width:1069px;
    margin-left:auto;
    margin-right:auto;
    margin-top:158px;
    font-size:24px;
    line-height:40px;
    @media (max-width: ${({theme}) => theme.breakpoints.lg}){
        margin-top :60px;

    }
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        text-align:center;
    }
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        margin-top:40px;
        font-size:16px;
        line-height:28px;
    }
`;
const HeroOrnamentC = styled(HeroOrnament)`
    position:absolute;
    right:-30px;
    top:-100px;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        display:none;
    }
    
`;
class HomeStudio extends React.Component {
    render(){
        let title = "",
        desc = "";
        if(typeof this.props.studio[0] !== "undefined"){
            title = this.props.studio[0].Hero_title,
            desc = this.props.studio[0].Hero_desc;
        }
        return(
            <Section>
                <Container>
                    <HeaderOrnament>
                        <Dflex>
                            <SectionTitleC>{title}</SectionTitleC>
                            <LazyLoad>
                            <img src="/static/images/studio-img-header.png" alt="header" />
                            </LazyLoad>
                        </Dflex>

                        <LazyLoad><HeroOrnamentC/></LazyLoad>
                    </HeaderOrnament>

                    <TextWrapper>
                        <ParagraphTextC>
                        {desc}
                        </ParagraphTextC>
                    </TextWrapper>
                </Container>
            </Section>
        )
    }
}
const mapStateToProps = state => {
    return { studio:state.studio};
  };

  
  export default connect(mapStateToProps,null)(HomeStudio)
  