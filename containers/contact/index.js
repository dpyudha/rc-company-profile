import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal,Dflex as DflexGlobal,DflexCenter as DflexCenterGlobal, TextTitle as TextTitleGlobal,SectionTitle as SectionTitleGlobal,ParagraphText as ParagraphTextGlobal,SectionTitleSmall,SmallText} from '../../components/content'
import ContainerGlobal from '../../components/container'
import Textfield from '../../components/textfield'
import {ButtonPrimary} from '../../components/button'
import HeroSvg from '../../static/images/img-pattern-contact.svg'
import Behance from '../../static/images/behance.svg'
import Dribbble from '../../static/images/dribbble.svg'
import Instagram from '../../static/images/instagram-o.png'


const SectionTitle = styled(SectionTitleGlobal)`
    margin-bottom:40px;
`;
const TextTitle = styled(TextTitleGlobal)`
    margin-bottom:16px;
`;

const TextWrapper = styled.div`
    padding-top:220px;
    padding-bottom:35px;
    position:relative;
    z-index:1;
    width :100%;
    @media (max-width:767.98px){
        padding-top:140px;
        overflow:hidden;
        text-align:center;
        h1 {
            font-size:48px;
            margin-bottom:20px;
        }
        h4 {
            font-size:24px;
            margin-bottom :10px;
        }
    }
    .hero-pattern{
        position:absolute;
        width:100%;
        height:208px;
        top:170px;
        @media (max-width:767.98px){
            width:600px;
            left:0;
            top:60px;
        }
    }
    *:not(.hero-pattern){
        position:relative;
        z-index:1;    
    }
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    max-width:493px;
    a {
        color :#2b304d;
    }  

`;
const Section = styled(SectionGlobal)`
    height:auto;
    display:flex;
    align-items:center;
    position :relative;
`;

const DflexCenter = styled(DflexCenterGlobal)`
    @media (max-width : 767.98px){
        flex-direction:column;
    }
`;
const Container =  styled(ContainerGlobal)`
    max-width:963px;
    width:100%;
    padding-bottom :73px;
`;
const FormWrapper = styled.form`
    width:100%;
    margin-top:25px;
    padding:0 65px;
    @media (max-width:767.98px){
        padding:0 20px;
    }
    .eapps-form-button {
        min-width :160px;
        background-color :${({ theme }) => theme.colors.primary} !important;
        border-color:#f9fbfe;
        color:#fff;
        text-align:center;
        font-family : 'Airbnb Cereal App Regular',sans-serif;
    }
    .eapps-form-element-label {
        font-family : 'Airbnb Cereal App Medium',sans-serif;
        font-weight:100;
    }
    .eapps-form-element-input-file-link, .eapps-form-element-input-file-list-item-state-loader, .eapps-form-element-checkbox-options-item-caption a{
        color:#4544e7 !important;
        
    }
`;
const Sidebar = styled.div`
    padding:0 65px;
    .sidebar-title{
        margin-bottom:40px;
    }
    @media (max-width:767.98px){
        padding:60px 20px 0;
    }
`;
const TextGroup = styled.div`
    margin-bottom:30px;
    .label {
        color:#7d819d;
        margin-bottom:5px;
    }
    .social {
        margin-top:7px;
        li {
            margin-bottom:15px;
            p{
                display:flex;
                align-items:center;
                svg,img{
                    margin-right:10px;
                }
            }
        }
    }
    
`;

const MediumText = styled(ParagraphText)`
    font-size:16px;
    line-height:24px;
    color:#2b304d;
`;
const Dflex = styled(DflexGlobal)`
    margin:0 -65px;
    
    @media (max-width:767.98px){
        margin:0 -15px;
        flex-wrap:wrap; 
        >*{
            flex :0 0 100%;
        }
    }
`;
const ButtonWrapper = styled.div`
    text-align:right;
    @media(max-width:767.98px){
        text-align:center;
        margin-top:60px;    
    }
`;
class Index extends React.Component {
    render(){
        return(
            <Section id="home-hero">
                <Container>
                    <DflexCenter>
                        
                        <TextWrapper>
                            <HeroSvg className="hero-pattern"/>
                            <SectionTitle>Hi we're here</SectionTitle>
                            <TextTitle >What we can do for you?</TextTitle>
                            <ParagraphText>
                            Fill in this form or <a href="">send us an e-mail.</a>
                            </ParagraphText>
                        </TextWrapper>
                        
                    </DflexCenter>
                    <Dflex>
                        
                  
                        <FormWrapper>
                            <div className="elfsight-app-94a2e66d-4a35-42fa-becd-5b06d0e57b09"></div>
                            
                        </FormWrapper>
                        <Sidebar>
                            <SectionTitleSmall className="sidebar-title">Get in touch</SectionTitleSmall>
                            <TextGroup>
                                <SmallText className="label">Hire</SmallText>
                                <MediumText>hello@omnicreativora.com</MediumText>
                            </TextGroup>
                            <TextGroup>
                                <SmallText className="label">Address</SmallText>
                                <MediumText>Perumahan M.B.S. no.28 Condongcatur, Sleman, Yogyakarta, Indonesia</MediumText>
                            </TextGroup>
                            <TextGroup>
                                <SmallText className="label">Follow Us</SmallText>
                                <ul className="social">
                                    <li>
                                        <a href="https://dribbble.com/omnicreativora">
                                        <MediumText>
                                            <Dribbble/> Dribbble
                                        </MediumText>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.behance.net/omnicreativora">
                                        <MediumText>
                                            <Behance/> Behance
                                        </MediumText>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/omnicreativora/">
                                        <MediumText>
                                            <img src={Instagram} alt="ig"/> Instagram
                                        </MediumText>
                                        </a>
                                    </li>
                                </ul>
                            </TextGroup>
                        </Sidebar>
                    </Dflex>
                </Container>
            </Section>
        )
    }
}

export default Index