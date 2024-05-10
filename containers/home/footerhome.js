import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, DflexCenter as DflexCenterGlobal, SectionTitle,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import Container from '../../components/container'
import CollaborateImgColor from '../../static/images/img_collaborate_color.svg'
import CollaborateImgTeal from '../../static/images/img_collaborate_teal.svg'
import WorksImgColor from '../../static/images/img_work_color.svg'
import WorksImgTeal from '../../static/images/img_work_teal.svg'
import Link from 'next/link'
import { connect } from 'react-redux'
import { Watch } from 'scrollmonitor-react';

const Section = styled(SectionGlobal)`
    padding:130px 0 210px;
    background-color:#241d49;
    position:relative;
    height:auto;
    &:after{
        content:"";
        position:absolute;
        width:100%;
        bottom:0;
        left:0;
        height:97px;
        border-top-left-radius:100px;
        background-color:#4544e6;
    }
    &.full {
        height:100vh;
    }
    .view-in-opacity {
        transform:scale(.9);
    }
    &.view-in{
        .view-in-opacity {
            transform:scale(1);
        }
    }
`;
const Dflex = styled(DflexCenterGlobal)`
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        display :block;
    }
    >div{
        padding:0 121px;
        @media (max-width: ${({theme}) => theme.breakpoints.lg}){
            padding: 0 25px;
        }
        @media (max-width: ${({theme}) => theme.breakpoints.sm}){
            padding:0;
            &:last-child{
                margin-top:60px;
            }
        }
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
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        font-size:25px;
    }
    svg {
        height:87px;
        display :block;
        margin:0 auto 29px;
        transition:all ease .3s;
        @media (max-width: ${({theme}) => theme.breakpoints.sm}){
            margin:0 auto 19px;
        }  
    }

    &:hover{
        text-decoration:underline;
        color:#ffffff;
    }
`;
class FooterHome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "collaborate" : true,
            "work" : true
        }
        // this.onHover = this.onHover.bind(this);
    }
    onHover = (loc,st)=>{
        console.log(loc)
        if(this.state[loc] !== st){
            this.setState({
                [loc]:st
            })
        }
        
    }
    render(){
        let url1 = "",
            texturl1 = "",
            url2 = "",
            texturl2 = "";

        if(typeof this.props.footer[0] !== "undefined"){
            url1 = this.props.footer[0].Home_footer_link1_url;
            texturl1 = this.props.footer[0].Home_footer_link1_text;
            url2 = this.props.footer[0].Home_footer_link2_url;
            texturl2 = this.props.footer[0].Home_footer_link2_text;
        }
        let classScroll = "";
        if (this.props.isInViewport) {
			classScroll = "view-in";
		} 
        return(
            <Section className={`${classScroll} ${this.props.className}`}>
                <Container>
                    <Dflex>
                        <Link href={url1}>
                            <div className="view-in-opacity">
                            <ImgWrapper onMouseEnter={this.onHover.bind(this,'work',false)} onMouseLeave={this.onHover.bind(this,'work',true)}>
                                {
                                    this.state.work === true ?
                                    <WorksImgTeal/>
                                    :
                                    <WorksImgColor/>
                                }
                                {texturl1}
                            </ImgWrapper>
                            </div>
                        </Link>
                        <Link href={url2}>
                            <div className="view-in-opacity">
                            <ImgWrapper onMouseEnter={this.onHover.bind(this,'collaborate',false)} onMouseLeave={this.onHover.bind(this,'collaborate',true)} >
                                {
                                    this.state.collaborate === true ?
                                    <CollaborateImgTeal/>
                                    :
                                    <CollaborateImgColor/>
                                }
                                {texturl2}
                            </ImgWrapper>
                            </div>
                        </Link>
                    </Dflex>
                </Container>
            </Section>
            
        )
    }
}
const mapStateToProps = state => {
    return { footer: state.footer };
  };
  
  
  export default connect(mapStateToProps,null)(Watch(FooterHome))
  