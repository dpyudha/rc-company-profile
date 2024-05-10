import React from 'react'
import styled from 'styled-components'

import Container from './container'
import {Dflex as DflexGlobal, SmallText} from './content'

import {LogoWhite} from '../static/images/logo-white.svg'
import {Behance} from '../static/images/behance.svg'
import {Dribbble} from '../static/images/dribbble.svg'
import {Instagram} from '../static/images/instagram.svg'
import { connect } from 'react-redux'
import Link from 'next/link'
import { getFooter } from '../actions/actions' 

import { Watch } from 'scrollmonitor-react';

const ContainerEl = styled(Container)`
    @media (max-width:1440px) and (min-width:1024px){
        padding:0 65px;
    }
`;
const FooterEl = styled.footer`
    background-color:#4544e6;
    padding-top:117px;
    padding-bottom:190px; 
    position:relative;
    display:flex;
    align-items:center;
    overflow:hidden;
    z-index:2;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        padding-top:0;
    }
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        padding-bottom:100px;
    }
    &.full {
        min-height:100vh;
    }
    p {
        color:#ffffff;
    }
    ul {
        li {     
            h6 {
                font-size:16px;
                font-family: 'Airbnb Cereal App Bold',sans-serif;
                color :#fff;
            }
            a{
                text-decoration:none;
            }
        }
    }
    .view-in-opacity {
        transition:all ease .6s;
        opacity:0;
    }
    .footer-logo {
        transform:translateX(-40px);
    }
    .footer-link-center {
        transform:translateY(-30px);
    }
    .footer-link-right {
        transform:translateX(40px);
    }
    .view-in {
        .view-in-opacity {
            opacity:1;
        }
        .footer-logo,.footer-link-right,.footer-link-center {
            transform:translate(0px,0px);
        }
    }
`;
const Dflex = styled(DflexGlobal)`
    justify-content:space-between;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        flex-wrap:wrap;
        >div{
            &:first-child{
                flex:0 0 100%;
                max-width:100%;
                text-align:center;
                margin-bottom:60px;
            }
        }
    }
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        padding:0;
        >div:nth-child(2){
            flex:0 0 50%;
            max-width:50%;
            
        }
        >div:last-child{
            flex:0 0 50%;
            max-width:50%;
        }
    }
    
`;
const UlLogo = styled.ul`
    >li {
        &:first-child{
            margin-bottom :26px;
            @media (max-width: ${({theme}) => theme.breakpoints.md}){
                margin-bottom :16px;
            }
        }
    }
`;
const UlLink = styled.ul`
    margin-top:10px;
    >li {
        margin-bottom:40px;
    }
`;
const UlLinks = styled(UlLink)`
    >li {
        margin-bottom:15px;
        cursor:pointer;
        &:first-child{
            margin-bottom:30px;
        }
    }
`;
const ListSocials = styled.ul`
    >li {
        display:inline-block;
        &:not(:last-child){
            margin-right:50px;
        }
        @media (max-width: ${({theme}) => theme.breakpoints.md}){
            display:block;
            &:not(:last-child){
                margin-bottom:18px;
                margin-right:0;
            }
        }
        
    }
    a {
        span{
            display:inline-flex;
            align-items:center;
        }
        svg{
            margin-right:10px;
            width:26px;
            height:26px;
            border-radius:26px;

        }
    }
`;
const CopyText = styled.h6`
    font-size:18px;
    line-height:1.94;
    color:#fff;
    letter-spacing:.5px;
    font-family:'Airbnb Cereal App Book',sans-serif;
`;
const ContainerCopy = styled.div`
    position:absolute;
    height:102px;
    width:100%;
    background-color:#3c3bd2;
    text-align:center;
    display:flex;
    bottom:0;
    left:0;
    align-items:center;  
`;
class Footer extends React.Component {
    componentWillMount = () => {
        this.props.dispatch(getFooter())
    }

    render(){
        let Footer_social = typeof this.props.footer[0] !== "undefined" ? this.props.footer[0].Footer_social : [];
        let Footer_explore = typeof this.props.footer[0] !== "undefined" ? this.props.footer[0].Footer_explore : [];
        let classScroll = "";
        if (this.props.isInViewport) {
			classScroll = "view-in";
		} 
        return(
            <FooterEl className={this.props.className}>
                <ContainerEl className={classScroll}>
                    <Dflex>
                        <div>
                            <UlLogo className="footer-logo view-in-opacity">
                                <li>
                                    <LogoWhite/>
                                </li>
                                <li>
                                    <SmallText>{typeof this.props.footer[0] !== "undefined" ? this.props.footer[0].Footer_caption : ""}</SmallText>
                                </li>
                            </UlLogo>
                        </div>
                        <div>
                            <UlLinks className="footer-link-center view-in-opacity">
                                <li>
                                    <h6>
                                    EXPLORE
                                    </h6>
                                </li>
                                {
                                    Footer_explore.map((dt,i)=>
                                    <li key={i}>
                                        <Link href={dt.url}><SmallText>{dt.name}</SmallText></Link>
                                    </li>
                                    )
                                }
                               
                            </UlLinks>
                        </div>
                        
                        <div>
                            <UlLink className="footer-link-right view-in-opacity">
                                <li>
                                    <h6>
                                        GET IN TOUCH
                                    </h6>
                                </li>
                                <li>
                                    <a href=""><SmallText>{typeof this.props.footer[0] !== "undefined" ? this.props.footer[0].Footer_email : ""}</SmallText></a>
                                </li>
                                <li>
                                    <a href=""><SmallText dangerouslySetInnerHTML={{__html: typeof this.props.footer[0] !== "undefined" ? this.props.footer[0].Footer_address : ""}} ></SmallText></a>
                                </li>
                                <li>
                                    <ListSocials>
                                        {
                                            Footer_social.map((d,i)=>
                                                <li key={i}>
                                                    <a href={d.url}>
                                                        <span>
                                                        {
                                                            d.social === "Behance" ?
                                                            <Behance/>
                                                            :
                                                            d.social === "Dribbble" ?
                                                            <Dribbble/>
                                                            :
                                                            <Instagram/>

                                                        }
                                                        <SmallText>{d.social}</SmallText>
                                                        </span>
                                                    </a>
                                                </li>
                                            )
                                           
                                            
                                        }
                                       
                                    </ListSocials>
                                </li>
                            </UlLink>
                        </div>
                        
                    </Dflex>
                </ContainerEl>
                <ContainerCopy className={classScroll}>
                    <Container>
                    <CopyText className="view-in-opacity">© 2019. Omnicreativora</CopyText>
                    </Container>
                    
                </ContainerCopy>
            </FooterEl>
        )
    }
}

const mapStateToProps = state => {
    return { footer: state.footer };
  };
  const mapDispatchToProps = dispatch => ({
    ...getFooter,
    dispatch                // ← Add this
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Watch(Footer))
  