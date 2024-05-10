import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal,Dflex as DflexGlobal,DflexCenter as DflexCenterGlobal, SectionTitleSmall as SectionTitleSmallGlobal,ParagraphText as ParagraphTextGlobal,CardLG} from '../../components/content'
import {ButtonLink as ButtonLinkGlobal,ButtonLG} from '../../components/button'
import Container from '../../components/container'
import IconThick from '../../static/images/icon/icon-thick.svg'
import PatternSVG from '../../static/images/manifesto/img-startup-patterns.svg'
import WorksImgColor from '../../static/images/img_work_color.svg'
import WorksImgTeal from '../../static/images/img_work_teal.svg'
import Link from 'next/link'

const Section = styled(SectionGlobal)`
    padding:200px 0;
    background-color:#241d49;
    position:relative;
    height:auto;
    border-top-left-radius:130px;
    overflow:hidden;
    @media (max-width:767.98px){
        padding:52px 0 0 0;
        border-top-left-radius:80px;
    }
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    color:#fff;
`;
const Dflex = styled(DflexCenterGlobal)`
    >div{
        @media (min-width:768px){
            padding:0 121px;
        }    
    }
`;
const TextWrapper = styled.div`
    max-width:750px;
    margin-left:auto;
    margin-right:auto;
    margin-top:200px;
    @media (max-width:767.98px){
        margin-top:53px;
        text-align:center;
    }
`;
const ImgWrapper = styled.a`
    text-align:center;
    display:block;
    font-size:30px;
    line-height:40px;
    letter-spacing:.5px;
    color:#605986;
    font-family: 'Airbnb Cereal App Bold',sans-serif;
    transition:all ease .3s;
    cursor:pointer;
    display:flex;
    align-items:center;
    @media (max-width:767.98px){
        flex-direction:column;
        font-size:26px;
    }
    svg {
        height:87px;
        display :block;
        margin-right:70px;
        transition:all ease .3s;
        @media (max-width:767.98px){
            margin-right:0;
            margin-bottom :20px;
        }
    }
    &:hover{
        text-decoration:underline;
        color:#ffffff;
        
    }
`;
const CardWrapper = styled.div`
    margin-top:108px;
    max-width:1179px;
    margin-left:auto;
    position:relative;
    margin-right:auto;
    @media (max-width:767.98px){
        margin-top:163px;
        padding-bottom:100px;
    }
`;
const Card = styled(CardLG)`
    background:#f5fcff;
    padding:60px;
    max-width:830px;
    margin-left:auto;
    margin-right:auto;
    *{
        position:relative;
        z-index:1;
    }
    @media (max-width:767.98px){
        padding: 48px 30px 40px;
    }
`;

const SectionTitleSmall = styled(SectionTitleSmallGlobal)`
    font-family:'Airbnb Cereal App Bold',sans-serif;
    margin-bottom:30px;
    color:#2b304d;
`;

const ButtonLink = styled(ButtonLinkGlobal)`
    color:#5352ff;
    display:block;
    margin-left:auto;
    margin-top:70px;
    position:relative;
    cursor:pointer;
    z-index:2;
    &:focus{
        outline:none;
        box-shadow:none;
    }
    @media (max-width:767.98px){
        margin-top:50px;
        margin-right:auto;
        font-size:26px;
    }

`;
const ButtonIcon = styled(ButtonLG)`
    display:flex;
    align-items:center;
    padding-left:20px;
    background:#e5e6ff;
    border-color:#e5e6ff;
    color:#292c7b;
    &:focus{
        outline:none;
        box-shadow:none;
    }
    svg {
        width:30px;
        height:30px;
        margin-right:15px;
        @media (max-width:767.98px){
            width:24px;
            height:24px;
            margin-right:10px;
        }
    }
    @media (max-width:991.98px){
        &:not(:last-child){
            margin-bottom:20px;
        }
    }
    
    @media (max-width:767.98px){
        font-size:15px;
        padding:15px 20px 15px 15px;
    }
`;
const ButtonRow = styled(DflexGlobal)`
    justify-content:space-between;
    margin-top:50px;
    flex-wrap:wrap;
`;
const Pattern = styled(PatternSVG)`
    position:absolute;
    width:100%;
    top:-100px;
`;
const ParagraphTextFooter = styled(ParagraphTextGlobal)``;
class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "work" : true
        }
        // this.onHover = this.onHover.bind(this);
    }
    onHover = (loc,st)=>{
        if(this.state[loc] !== st){
            this.setState({
                [loc]:st
            })
        }
        
    }
    render(){
        var badges = typeof this.props.content.Contact_form_badges !== "undefined" ? this.props.content.Contact_form_badges.split(",") :[];
        console.log(badges)
        return(
            <Section className={this.props.className}>
                <Container>
                    <Dflex>
                        <Link href="/">
                            <ImgWrapper onMouseEnter={this.onHover.bind(this,'work',false)} onMouseLeave={this.onHover.bind(this,'work',true)}>
                                {
                                    this.state.work === true ?
                                    <WorksImgTeal/>
                                    :
                                    <WorksImgColor/>
                                }
                                {this.props.content.Footer_url_text}
                            </ImgWrapper>
                        </Link>
                        
                    </Dflex>
                    <TextWrapper>
                        <ParagraphText>
                        {this.props.content.Footer_text}
                        </ParagraphText>
                    </TextWrapper>
                    <CardWrapper>
                        <Pattern/>
                        <Card>
                            <SectionTitleSmall>{this.props.content.Contact_form_title}</SectionTitleSmall>
                            <ParagraphTextFooter>{this.props.content.Contact_form_desc}</ParagraphTextFooter>
                            <ButtonRow>
                            {badges.map((d,i)=>
                                <ButtonIcon disabled key={i}>
                                    <IconThick/>
                                    {d}
                                </ButtonIcon>
                            )}
                            
                            </ButtonRow>
                            <Link href="/">
                                <ButtonLink>
                                    {this.props.content.Contact_form_btn_text}
                                </ButtonLink>
                            </Link>
                        </Card>
                        
                    </CardWrapper>
                </Container>
            </Section>
            
        )
    }
}
export default Footer