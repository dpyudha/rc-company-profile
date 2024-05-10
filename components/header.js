import React from 'react'
import styled ,{keyframes} from 'styled-components'
import ContainerGlobal from './container'
import {ButtonPrimaryInvert as ButtonPrimaryInvertGlobal, ButtonToggle} from './button'
import Logo from '../static/images/logo.svg'
import Link from 'next/link'
const HeaderWrapper = styled.header`
    padding:33px 44px;
    position:fixed;
    width:100%;
    z-index:10;
    transition: all ease .3s;
    &.onscroll{
        padding:17px 44px;
    }
    @media (max-width: ${({theme}) => theme.breakpoints.lg}){
        padding:33px 10px;
        &.onscroll{
            padding:20px 10px;
        }
    }
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        padding:18px 0;
        &.onscroll{
            padding:10px 0;
        }
    }
    &.onscroll{
        background:#fff;
        box-shadow:0px 20px 30px rgba(18, 14, 37, 0.1);
    }

`;
const Container = styled(ContainerGlobal)`
    color:red;
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-width 1440px
`;
const LogoWrapper = styled.a`
    max-width:202px;
    cursor:pointer;
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        max-width:139px;
        svg{
            width:100%;
        }
    }
`;
const ButtonWrapper = styled.div`
    display:inline-flex;
    align-items:center;
`;
const ButtonPrimaryInvert = styled(ButtonPrimaryInvertGlobal)`
    margin-right : 54px;
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        display:none;
    }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Loading = styled.div`
    position:fixed;
    width:100vw;
    height:100vh;
    background:rgba(0, 0, 0, 0.6);
    z-index:100000;
    display:flex;
    align-items:center;
    justify-content:center;
    @media (max-width: ${({theme}) => theme.breakpoints.xs}){
        height:auto;
        overflow:scroll;
    }
    span {
        position:relative;
        width :30px;
        height:30px;
        &:after{
            content:"";
            display:inline-block;
            width:30px;
            height:30px;
            border-radius:50px;
            border:10px solid rgba(255,255,255,0.5);
            position:absolute;
            top:0;
            left:0;
        }
        &:before{
            content : "";
            display:inline-block;
            width:30px;
            height:30px;
            border-radius:50px;
            border: 10px solid transparent;
            border-top:10px solid #fff;
            left:0;
            top:0;
            position:absolute;
            animation:${rotate} 1s ease infinite;
        }
    }

`;
const MegaMenu = styled.div`
    position:absolute;
    width:100vw;
    height:100vh;
    background:#231d49;
    top:0px;
    left :0;
    transition:all ease-out .2s;
    opacity:0;
    visibility:hidden;
    &.isShow {
        opacity:1;
        visibility:visible;
    }
    .mega-menu--container {
        max-width:1140px;
        margin:0 auto;
        padding:0 30px;
        height:100%;
        display:flex;
        align-items:center;
        justify-content :space-between;
        @media (max-width: ${({theme}) => theme.breakpoints.xs}){
            padding:70px 15px;
            flex-direction:column;
            align-items:flex-start;
            justify-content:flex-start;
            overflow:scroll;
        }
    }
    .mega-menu{
        &--main {
            @media (max-width: ${({theme}) => theme.breakpoints.xs}){
                margin-bottom:50px; 
            }
            li {
                &:not(:last-child){
                    margin-bottom:30px;
                    @media (max-width: ${({theme}) => theme.breakpoints.xs}){
                        margin-bottom:14px;
                    }
                }
                position:relative;
                padding-left:40px;
                transition:all ease-out .3s;
                transform:translateY(17px);
                opacity:0;
                
                &:after {
                    content :"";
                    display:block;
                    height :5px;
                    width:20px;
                    background:#695df7;
                    position:absolute;
                    left:0;
                    top : 20px;
                    transition:all ease-out .2s;
                    transform:translateX(-20px);
                    opacity:0;
                    @media (max-width: ${({theme}) => theme.breakpoints.xs}){
                        top:24px;
                    }
                }
                a{
                    font-family: 'Airbnb Cereal App Bold';
                    color:#fff;
                    font-size:45px;
                    text-decoration:none;
                    transition:all ease-out .3s;
                    @media (max-width: ${({theme}) => theme.breakpoints.xs}){
                       font-size:32px;
                       line-height:54px;
                    }
                }
                &:hover {
                    &:after {
                        opacity:1;
                        transform:translateX(0);
                    }
                    a {
                        color:#695df7;
                    }
                }
            }
            
        }
        &--additional {
            &:first-child{
                margin-bottom:100px;
                @media (max-width: ${({theme}) => theme.breakpoints.xs}){
                    margin-bottom:50px;
                }
            }
            &:last-child{
                margin-bottom :50px;
                @media (max-width: ${({theme}) => theme.breakpoints.xs}){
                    margin-bottom:0;
                }
                a {
                    text-decoration:underline;
                    font-size:18px;
                }
            }
            @media (max-width: ${({theme}) => theme.breakpoints.xs}){
                padding-left:40px;
            }
            li {
                transition:all ease-out .3s;
                transform:translateY(17px);
                opacity:0;
                &:not(:last-child){
                    margin-bottom:20px;
                }
                a{
                    font-family: 'Airbnb Cereal App Medium';
                    color:#fff;
                    font-size:25px;
                    text-decoration:none;
                    transition:all ease-out .3s;
                    &:hover{
                        color:#695df7;
                    }
                    @media (max-width: ${({theme}) => theme.breakpoints.xs}){
                        font-size:24px;
                        line-height:40px;
                    }
                }
            }
        }
        &--item__title {
            h5 {
                font-family: 'Airbnb Cereal App Medium';
                color:#564f7c;
                font-size:20px;
                line-height:40px;
            }
            
        }
    }
    &.isShow{
        .mega-menu--main {
            li {
                transform:translateY(0);
                opacity:1;
                &:nth-child(2){
                    transition-delay: .1s;
                }
                &:nth-child(3){
                    transition-delay: .2s;
                }
                &:nth-child(4){
                    transition-delay: .3s;
                }
                &:nth-child(5){
                    transition-delay: .4s;
                }
                &:nth-child(6){
                    transition-delay: .5s;
                }
            }
        }
        .mega-menu--additional {
            li {
                transform:translateY(0);
                opacity:1;
                &:nth-child(1){
                    transition-delay: .1s;
                }
                &:nth-child(2){
                    transition-delay: .2s;
                }
                &:nth-child(3){
                    transition-delay: .3s;
                }
                &:nth-child(4){
                    transition-delay: .4s;
                }
                &:nth-child(5){
                    transition-delay: .5s;
                }
                &:nth-child(6){
                    transition-delay: .6s;
                }
            }
        }
    }
`;
function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  }
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "isLoading" : true,
            "showMegaMenu" : false,
            "activeClass" : ""
        }
        this.toggle = this.toggle.bind(this);

    }
    componentDidMount(){

        demoAsyncCall().then(() => this.setState({ "isLoading": false }));
        window.addEventListener('scroll', () => {
            let activeClass = '';
            if(window.scrollY > 50){
                activeClass = 'onscroll';
            }
            this.setState({ activeClass });
         });
    }
    toggle = () => {
        let showmega = this.state.showMegaMenu ? false : true;
        this.setState({
            "showMegaMenu" : showmega,
        })
    }
    render(){
        let megamenuclass= this.state.showMegaMenu ? "isShow" : "",
        toggleclass= this.state.showMegaMenu ? "active" : "";
        return(
            <div>
            {
                this.state.isLoading ? 
                <Loading>
                    <span></span>
                </Loading>
                : ""
            }
            <HeaderWrapper className={this.state.activeClass}>
                <Container>
                    <Link href="/" >
                        <LogoWrapper>
                            <Logo/>
                            
                        </LogoWrapper>
                    </Link>
                    <ButtonWrapper>
                        <Link href="/contact" ><ButtonPrimaryInvert>Let's Talk</ButtonPrimaryInvert></Link>
                        <ButtonToggle className={toggleclass} onClick={this.toggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </ButtonToggle>
                    </ButtonWrapper>
                </Container>
                <MegaMenu className={megamenuclass}>
                    <div className="mega-menu--container">
                    <div>
                    <ul className="mega-menu--main">
                        <li>
                            <Link href="/"><a>Home</a></Link>
                        </li>
                        <li>
                            <Link href="/what-we-do"><a>What We Do</a></Link>
                        </li>
                        <li>
                            <Link href="/studio"><a>Studio</a></Link>
                        </li>
                        <li>
                            <Link href="/manifesto"><a>Manifesto</a></Link>
                        </li>
                        <li>
                            <Link href="/works"><a>Works</a></Link>
                        </li>
                        <li>
                            <Link href="/contact"><a>Contact</a></Link>
                        </li>
                    </ul>
                    </div>
                    <div>
                        <ul className="mega-menu--additional">
                            <li className="mega-menu--item__title">
                               <h5>Socials</h5> 
                            </li>
                            <li>
                                <a href="">Dribbble</a>
                            </li>
                            <li>
                                <a href="">Behance</a>
                            </li>
                            <li>
                                <a href="">Instagram</a>
                            </li>
                            <li>
                                <a href="">Twitter</a>
                            </li>
                        </ul>
                        <ul className="mega-menu--additional email">
                            <li className="mega-menu--item__title">
                               <h5>Say Hi</h5> 
                            </li>
                            <li>
                                <a href="mailto:hello@omnicreativora.com">hello@omnicreativora.com</a>
                            </li>
                           
                        </ul>
                    </div>
                    </div>
                </MegaMenu>
                
            </HeaderWrapper>
            </div>
        )
    }
}
export default Header