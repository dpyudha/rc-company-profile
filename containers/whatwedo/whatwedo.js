import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, Dflex as DflexGlobal, SectionTitle,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import ContainerGlobal from '../../components/container'


const Section = styled(SectionGlobal)`
    height:auto;
    padding-top:102px;
`;
const Container = styled(ContainerGlobal)`
    max-width:1170px;
`;
const Title = styled.p`
    color: #6E7AF9;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.75px;
    line-height: 22px;
    text-align: left;
    font-family : 'Airbnb Cereal App Medium',sans-serif;
    text-align:center;
`; 
const Dflex = styled(DflexGlobal)`
    flex-wrap:wrap;
    margin:71px -30px 0;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        margin:30px 0px 0;
        overflow:hidden;
    }
    >div{
        flex:0 0 33.3%;
        max-width:33.3%;
        padding :0 30px;
        @media (max-width: ${({theme}) => theme.breakpoints.md}){
            flex:0 0 100%;
            max-width:100%;
            padding:0;
            &:not(:last-child){
                margin-bottom:30px;
            }
        }
    }
    .card {
        border-radius:50px;
        min-height:380px;
        padding:51px 71px;
        color:#fff;
        height:100%;
        text-align:center;
        transition: all cubic-bezier(.16,1.11,.45,.97) .7s;
        cursor:pointer;
        &.purple {
            background-color: #5055C1;
            
            background-size:cover;
            background-position:center;
            background-repeat:no-repeat;
            background-image:url('/static/images/whatwedo/card_purple.png');
            &:hover{
                box-shadow: 30px 30px 50px 0 #CED0FF;
                transform:translateY(-2px);
            }
        }
        &.green {
            background-color: #2ebc77;
            background-size:cover;
            background-position:center;
            background-repeat:no-repeat;
            background-image:url('/static/images/whatwedo/card_green.png');
            &:hover{
                box-shadow: 30px 30px 50px 0 #c5edd9;
                transform:translateY(-2px);
            }
        }
        &.blue {
            background-color: #29b2e5;

            background-size:cover;
            background-position:center;
            background-repeat:no-repeat;
            background-image:url('/static/images/whatwedo/card_blue.png');
            &:hover{
                box-shadow: 30px 30px 50px 0 #b5dceb;
                transform:translateY(-2px);
            }
        }
        h3 {
            font-family : 'Airbnb Cereal App Bold',sans-serif;
            font-size:25px;
            letter-spacing:1px;
            line-height :30px;
            padding-bottom:38px;
            margin-bottom:24px;
            display:block;
            position:relative;
            &:after{
                content :"";
                display:block;
                width:26px;
                height:3px;
                background:#fff;
                position:absolute;
                bottom:0;
                left:0;
                right:0;
                margin:0 auto;
            }
        }
        ul {
            list-style-type:none;
            padding:0;
            li{
                font-family : 'Airbnb Cereal App Light',sans-serif;
                font-size: 20px;
                letter-spacing: 0.5px;
                line-height: 40px;
            }
        }
    }
`;
class Whatwedo extends React.Component {

    render(){
        return(
            <Section id="home-hero">
                <Container>
                    <Title>WHAT WE DO</Title>
                    <Dflex>
                        <div>
                        <div className="card purple">
                            <h3>Interaction</h3>
                            <ul>
                                <li>User Interface</li>
                                <li>User Experience</li>
                                <li>Mobile Application</li>
                                <li>Website</li>
                                <li>Design System</li>
                            </ul>
                        </div>
                        </div>
                        <div>
                        <div className="card green">
                            <h3>Branding</h3>
                            <ul>
                                <li>User Interface</li>
                                <li>User Experience</li>
                                <li>Mobile Application</li>
                                <li>Website</li>
                                <li>Design System</li>
                            </ul>
                        </div>
                        </div>
                        <div>
                        <div className="card blue">
                            <h3>Development</h3>
                            <ul>
                                <li>Mobile Apps</li>
                                <li>Front-end Development</li>
                                <li>Multiplatform solutions</li>
                                
                            </ul>
                        </div>
                        </div>
                    </Dflex>
                </Container>
            </Section>
        )
    }
}

export default Whatwedo