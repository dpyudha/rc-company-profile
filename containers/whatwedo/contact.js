import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal,CardLG,OrnamentHalfcircleGreen as OrnamentHalfcircleGreenGlobal,OrnamentHalfcircleBlue as OrnamentHalfcircleBlueGlobal ,Dflex as DflexGlobal,LinkBold as LinkBoldGlobal, TextTitle as TextTitleGlobal,SectionSubTitle ,ParagraphTextLight} from '../../components/content'
import ContainerGlobal from '../../components/container'
import {ButtonLink as ButtonLinkGlobal,ButtonLG} from '../../components/button'
import Link from 'next/link'
import LazyLoad from "react-lazyload";

import { connect } from 'react-redux'


const Section = styled(SectionGlobal)`
    height:auto;
    padding-top:102px;
    padding-bottom:130px;
    background :#191434;
    border-top-left-radius:100px;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        overflow:hidden;
    }
`;
const Container = styled(ContainerGlobal)`
    max-width:1170px;
`;

const Dflex = styled(DflexGlobal)`
    justify-content:space-between;
    >div{
        &:first-child{
            flex:0 0 216px;
            max-width:216px;
        }
        &:last-child{
            flex: 0 0 670px;
            
            text-align:left;
        }
    }
`;
const ContactHeader = styled(DflexGlobal)`
    justify-content:space-between;
    flex-wrap:wrap;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        text-align:center;
    }
    >div{
        &:first-child{
            flex:0 0 30%;
            max-width:30%;
            @media (max-width: ${({theme}) => theme.breakpoints.md}){
                flex:0 0 100%;
                max-width:100%;
                margin-bottom:30px;
            }
        }
        &:last-child{
            flex: 0 0 670px;
            
            text-align:left;
            @media (max-width: ${({theme}) => theme.breakpoints.md}){
                flex:0 0 100%;
                max-width:100%;
            }
        }
    }
    h4,p{
        color:#fff;
    }
    
`;
const LinkBold = styled(LinkBoldGlobal)`

`;
const TextTitle = styled(TextTitleGlobal)``;
const ContactCardWrapper = styled(DflexGlobal)`
    margin:70px -15px 0;
    flex-wrap:wrap;
    >div{
        flex:0 0 50%;
        padding:0 15px;
        @media (max-width: ${({theme}) => theme.breakpoints.md}){
            flex:0 0 100%;
            max-width:100%;
            &:not(:last-child){
                margin-bottom:30px;
            }
        }
    }
`;

const ContactCard = styled.div`
    padding:48px 40px 80px;
    border-radius:33px;
    background:#F9FBFE;
    position:relative;
    min-height:769px;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        min-height:auto;
        padding: 50px 30px 50px;
    }
    >img {
        position:absolute;
        top :25px ;
        @media (max-width: ${({theme}) => theme.breakpoints.md}){
            position:relative;
            top:0;
            margin:0 auto 30px;
            display:block;
        }
    }
    h6 {
        font-size:40px;
        color:#2B304D;
        line-height:48px;
        letter-spacing:1px;
        margin-bottom:51px;
    }
    >p {
        color:#2B304D;
        min-height:120px;
        margin-bottom:24px;
    }
    >a{
        text-align:center;
        display:block;
        position:absolute;
        bottom:48px;
        left:0;
        right:0;
        margin:0 auto;
        @media (max-width: ${({theme}) => theme.breakpoints.md}){
            bottom:0;
            position:relative;
            margin-top:30px;
        }
    }
    ul {
        padding:21px 18px 30px;
        border-radius:30px;
        li {
            position :relative;
            display:flex;
            align-items:center;
            &:before {
                content:"";
                display:block;
                width:24px;
                height:24px;
                flex:0 0 24px;
                border-radius:24px;
                margin-right:20px;
            }
            &:not(:last-child){
                margin-bottom:32px;
            }
        }
    }
    &.project {
        overflow:hidden;
        &:after {
            content:"";
            display:block;
            background:#FFD5B9;
            width :335px;
            height:335px;
            opacity:0.2;
            position:absolute;
            top:-180px;
            right:-160px;
            transform:rotate(45deg);
        }
        >img {
            right:25px;
            z-index:1;
        }
        >a{
            color:#6542F4;
        }
        ul {
            background:#F0ECFF;
            li {
                p {
                    color:#4321CD;
                }
                &:before {
                    background:#6542F4;
                }
            }
        }
    }
    &.monthly {
        >img {
            right:0;
        }
        >a{
            color:#0B8EC8;
        }
        ul {
            background:#DFF5FF;
            li {
                &:before{
                    background:#0B8EC8;
                }
                p {
                    color:#0B8EC8;
                }
            }
        }
    }
`;
const TextWrapper = styled(DflexGlobal)`
    align-items:center;
    margin-top:206px;
    margin-bottom:50px;
    position:relative;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        flex-direction:column-reverse;
        margin-top:140px;
        margin-bottom:80px;
    }
    >div{
        flex: 0 0 50%;
        position:relative;
    }
    p {
        color:#fff;
        max-width:500px;
        @media (max-width: ${({theme}) => theme.breakpoints.md}){
            text-align:center;
            margin-top:60px;
        }
    }
    img {
        max-width:381px;
        width:100%;
        margin-left:auto;
        display:block;
    }
`;

const OrnamentHalfcircleGreen = styled(OrnamentHalfcircleGreenGlobal)`
top:-200px;
left:20px;
`;

const OrnamentHalfcircleBlue = styled(OrnamentHalfcircleBlueGlobal)`
    top:-120px;
    right:-70px;
`;

const ButtonIcon = styled(ButtonLG)`
    display:inline-flex;
    align-items:center;
    padding-left:20px;
    background:#2BB7F4;
    border-color:#2BB7F4;
    color:#fff;
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
const ButtonLink = styled(ButtonLinkGlobal)`
    color:#fff;
    display:block;
    margin-left:auto;
    margin-top:50px;
    position:relative;
    cursor:pointer;
    z-index:2;
    &:focus{
        outline:none;
        box-shadow:none;
    }
    @media (max-width:991.98px){
        margin-top:50px;
        margin-right:auto;
        font-size:26px;
    }

`;
const FormCard = styled(CardLG)`
    background:#292C7B;
    padding:40px;
    margin-left:auto;
    margin-right:auto;
    h6 {
        font-size:38px;
        letter-spacing:1.1px;
        line-height:43px;
        margin-bottom:20px;
        color:#fff;
    }
    p {
        color:#fff;
        font-size:18px;
        line-height:28px;
        margin-bottom:50px;
        @media (max-width: ${({theme}) => theme.breakpoints.md}){
            margin-bottom:50px;
        }
    }
    *{
        position:relative;
        z-index:1;
    }
    @media (max-width:767.98px){
        padding: 48px 30px 40px;
    }
`;
const ButtonRow = styled(DflexGlobal)`
    flex-wrap:wrap;
    button{
        &:last-child{
            margin-left:50px;
            @media (max-width: ${({theme}) => theme.breakpoints.md}){
                margin-left:0;   
            }
        }
    }
`;
const IconThick = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 15px;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat;
    background-image:url('/static/images/icon/icon-thick-lightblue.png');
`;
class Contact extends React.Component {

    render(){
        
        return(
            <Section id="home-hero">
                <Container>
                    <ContactHeader>
                        <div>
                        <TextTitle>Our Approach</TextTitle>
                        </div>
                        <div>
                        <ParagraphTextLight>We are not magician, the all processes are transparant. We go into the root problem, trying to solve quicker. Together we set the measurable time and result. </ParagraphTextLight>
                        </div>
                    </ContactHeader>
                    <ContactCardWrapper>
                        <div>
                        <ContactCard className="project">
                            <LazyLoad>
                            <img src="/static/images/whatwedo/img_project.png"/>
                            </LazyLoad>
                            <SectionSubTitle>Project Based</SectionSubTitle>
                            <ParagraphTextLight>Complete design service for your products. We cen help you to make specific design project.</ParagraphTextLight>
                            <ul>
                                <li>
                                    <ParagraphTextLight>Measurable output</ParagraphTextLight>
                                </li>
                                <li>
                                    <ParagraphTextLight>Fixed timeplan</ParagraphTextLight>
                                </li>
                                <li>
                                    <ParagraphTextLight>Fixed timeplan</ParagraphTextLight>
                                </li>
                            </ul>
                            <LinkBold href="">Let's Talk</LinkBold>
                        </ContactCard>
                        </div>
                        <div>
                        <ContactCard className="monthly">

                            <LazyLoad><img src="/static/images/whatwedo/img_monthly.png"/></LazyLoad>
                            <SectionSubTitle>Project Based</SectionSubTitle>
                            <ParagraphTextLight>Long term design partnertship. You will have your own design team. Complete design service to cover your UI-UX design and marketing materials.</ParagraphTextLight>
                            <ul>
                                <li>
                                    <ParagraphTextLight>Cover all design need from Logo, Marketing materials, Web Design or Apps Design.</ParagraphTextLight>
                                </li>
                                <li>
                                    <ParagraphTextLight>Fixed timeplan</ParagraphTextLight>
                                </li>
                                <li>
                                    <ParagraphTextLight>Fixed timeplan</ParagraphTextLight>
                                </li>
                            </ul>
                            <LinkBold href="">Let's Talk</LinkBold>
                        </ContactCard>
                        </div>
                    </ContactCardWrapper>
                    <TextWrapper>
                        
                        <div>
                        <OrnamentHalfcircleGreen/>
                        <OrnamentHalfcircleBlue/>
                        <ParagraphTextLight>
                        Our DNA is startups spirit, born with hustle and struggle. Everything need to be as fast as can so doesn’t lose the momentum. Rapid design, rapid implementation, rapid evaluation. Now we are ready to help you, startups
                        </ParagraphTextLight>
                        
                        </div>
                        <div>
                            <LazyLoad>
                            <img src="/static/images/whatwedo/img_dna_icons.png"/>
                            </LazyLoad>
                        </div>
                    </TextWrapper>
                    <FormCard>
                        <SectionSubTitle>Startups V.1</SectionSubTitle>
                        <ParagraphTextLight>We make the core design to ride the wave. We belive momentum never came back, now or never, we want you speak loudly. LLLaunch!</ParagraphTextLight>
                        <ButtonRow>
                        <ButtonIcon>
                            <IconThick/>
                            Brand Identity
                        </ButtonIcon>
                        <ButtonIcon>
                            <IconThick/>
                            Apps/ Website Design
                        </ButtonIcon>
                        </ButtonRow>
                        <Link href="/">
                                <ButtonLink>
                                    Let's Talk
                                </ButtonLink>
                        </Link>
                    </FormCard>
                </Container>
            </Section>
        )
    }
}
const mapStateToProps = state => {
    return { wwd:state.wwd};
  };

  
  export default connect(mapStateToProps,null)(Contact)
  