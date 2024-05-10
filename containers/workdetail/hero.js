import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { DflexCenter as DflexCenterGlobal, SectionTitle,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import Container from '../../components/container'
const TextWrapper = styled.div`
    flex : 0 0 500px;
    @media (max-width:991.98px){
        text-align:center;
    }
    &.text-center {
        text-align:center;
    }
    
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    
`;
const Section = styled.section`
    padding-top:210px;
    @media (max-width:575.98px){
        padding-top:128px;
    }
    .hero-image {
        position:absolute;
        right:0;
        z-index:1;
        bottom:-50px;
        width:1257px;
        height:341px;
    }
`;

const DflexCenter = styled(DflexCenterGlobal)`
    flex-wrap:wrap;
    align-items:flex-start;
    padding-bottom:80px;
    >div{
        @media (max-width:991.98px){
            flex:0 0 100%;
            max-width:100%;
        }
    }
    &.hero-paragraph{
        margin-left:auto;
        margin-right:auto;
        max-width:1000px;
        padding-top:100px;
        padding-bottom:100px;
        border-bottom:1px solid #E3E5F4;
        margin-bottom:100px;
        @media (max-width:991.98px){
            padding-top:50px;
            padding-bottom:20px;
            margin-bottom:50px;
        }
        .hero-paragraph__wrapper{
            @media (min-width:992px){
                padding-left:40px;
                padding-right:40px;
                &:first-child{
                    padding-left:0;

                }
                &:last-child{
                    padding-right:0;
                    
                }
            }
            p {
                font-size:18px;
                text-align:left;
                margin-bottom:40px;
                color:#687089;
                @media (max-width:575.98px){
                    font-size:14px;
                    line-height:26px;
                }
            }
        }
        >div{
            flex:0 0 50%;
            max-width:50%;
            @media (max-width:991.98px){
                flex:0 0 100%;
                max-width:100%;
            }
        }
    }

`;

const JumpButton = styled.a`
    font-family:'Airbnb Cereal App Bold',sans-serif;
    color:#2b304d;
    position:relative;
    z-index:2;
    @media (max-width:767.98px){
        margin-top:50px;
        display:block;
    }
`;
const HeroImage = styled.div`
    text-align:right;
    img {
        max-width:1220px;
        width:calc(100% + 20px);
        position:relative;
        right :-20px;
        @media(max-width:575.98px){
            right:0;
        }

    }
`;
class Hero extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        let title = "Title",
        subtitle = "Subtitle",
        buttonUrl = "/",
        hero_image = "",
        hero_text_left = "",
        hero_text_right="";
        
        if(typeof this.props.workslistsingle.Hero_title !== "undefined"){
            title = this.props.workslistsingle.Hero_title;
            subtitle = this.props.workslistsingle.Hero_subtitle;
            buttonUrl = this.props.workslistsingle.Hero_url;
            hero_image = process.env.API_ENDPOINT+this.props.workslistsingle.Hero_image.url;
            hero_text_left = this.props.workslistsingle.Hero_text_left;
            hero_text_right = this.props.workslistsingle.Hero_text_right;
            
        }
        return(
            <Section id="home-hero">
                <Container>
                    <img className="hero-image" src="/static/images/workdetail/img_work_airpush_hero.png" alt="airpush image" />
                    <DflexCenter>
                        
                        <TextWrapper>
                            <SectionTitle>{title}</SectionTitle>
                            <ParagraphText>
                            {subtitle}
                            </ParagraphText>
                        </TextWrapper>
                        <TextWrapper className="text-center">
                            <JumpButton href={buttonUrl}>Jump to website</JumpButton>
                        </TextWrapper>
                        
                    </DflexCenter>
                    
                </Container>
                <Container>
                    <HeroImage>
                        <img src={hero_image} alt={title}/>
                    </HeroImage>

                    <DflexCenter className="hero-paragraph">
                        <TextWrapper className="hero-paragraph__wrapper">
                            <ParagraphText>
                            {hero_text_left}
                            </ParagraphText>
                        </TextWrapper>
                        <TextWrapper className="hero-paragraph__wrapper">
                            <ParagraphText>
                            {hero_text_right}
                            </ParagraphText>
                        </TextWrapper>
                    </DflexCenter>
                </Container>
            </Section>
        )
    }
}

const mapStateToProps = state => {
    return { workslistsingle:state.workslistsingle};
  };

  
  export default connect(mapStateToProps,null)(Hero)