import React from 'react'
import styled, { keyframes } from 'styled-components'
import {Section as SectionGlobal, Dflex as DflexGlobal, SectionSubTitle,ParagraphText as ParagraphTextGlobal,TextTitle} from '../../components/content'
import Container from '../../components/container'
import Card from '../../components/card'
import { Watch } from "scrollmonitor-react";

const Section = styled(SectionGlobal)`
    height:100vh;
    overflow:hidden;
    @media (max-width:991.98px){
        height : auto;
        padding-top:200px;
        align-items:flex-start;
        padding-bottom:80px;
    }
    @media (max-width:767.98px){
        padding-top:100px;
    }
    .subtitle {
        transform:translateY(-30px);
    }
    .title,.text {
        transform:translateX(50px);
    }
    &.view-in {
        .subtitle {
            transform:translateY(0px);
        }
        .title,.text {
            transform:translateX(0px);
        }
    }
`;
const Dflex = styled(DflexGlobal)`
    align-items:center;
    flex-wrap:wrap;
`;

const Running = keyframes`
    from {
        transform:translateY(0%);
    }
    to {
        transform:translateY(-550%);

    }
    
`;

const ClientWrapper = styled.div`
    flex : 0 0 calc(100% - 483px);
    padding-right :200px;
    padding-left:56px;
    display:inline-flex;
    flex-wrap:wrap;
    max-height 80vh;
    overflow:hidden;
    position:relative;
    @media (max-width:991.98px){
        flex:0 0 100%;
        padding-right:40px;
        padding-left:40px;
        height:100vh;
        max-height:none;
        transform:rotate(30deg);
    }
    @media (max-width:767.98px){
        flex:0 0 500px;
        transform:rotate(30deg) translate(-100px,0);
    }
    &:before {
        content :"";
        display :block;
        position:absolute;
        top: 0;
        background-image: linear-gradient(to top, rgba(249, 251, 254, 0), #f9fbfe);
        width:100%;
        height:169px;
        left:0;
        z-index:1;
    }
    &:after {
        content :"";
        display :block;
        position:absolute;
        bottom: 0;
        background-image: linear-gradient(to bottom, rgba(249, 251, 254, 0), #f9fbfe);
        width:100%;
        height:169px; 
        left:0;
    }
    >div {
        margin:16px;
        box-sizing:border-box;
        flex : 0 0 calc(50% - 32px);
        height:300px;
        display:inline-flex;
        flex-direction:column;
        justify-content:flex-end;
        animation: ${Running} 30s linear infinite;
        
        &:nth-child(odd){
            margin-top:-160px;
            @media(max-width:991.98px){
                margin-top:-50px;
            }
            @media (max-width:767.98px){
                margin-top:-20px;

            }
        }
        @media(max-width:991.98px){
            flex: 0 0 calc(50% - 50px);
            margin:25px;
        }
        @media (max-width:767.98px){
            height:200px;
            flex: 0 0 calc(50% - 30px);
            margin:15px;
        } 
    }
`;
const CardItem = styled.div`
    flex : 0 0 calc(50% - 32px);
    margin:16px;
    display:none;
    
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    margin-top:10px;
    font-size:18px;
    line-height:30px;
`;
const TextWrapper = styled.div`
    flex:0 0 383px;
    padding-right:20px;
    @media (max-width:991.98px){
        flex:0 0 100%;
        margin-top:150px;
        text-align:center;
    }
    @media (max-width:767.98px){
        margin-top:50px;
    }
`;
class HomeTestimonial extends React.Component {
    constructor(props){
        super(props);
        this.renderCard = this.renderCard.bind(this);
    }
    renderCard = (item,index) => {
        return(
            <CardItem key={index}>
                <Card
                    
                    title={item.title}
                    content={item.content}
                />
            </CardItem>
        )
    }
    componentDidUpdate = () => {
        console.log('hometesti',this.props.clients)
    }
    render(){
        const cards = [
            {"title" : "Wyre", "content":"Visual Identity for Wyre company product"},
            {"title" : "Adobe", "content":"Visual Identity for Wyre company product"},
            {"title" : "Descript", "content":"Visual Identity for Wyre company product"},
            {"title" : "Mozilla", "content":"Visual Identity for Wyre company product"},
            {"title" : "Wyre", "content":"Visual Identity for Wyre company product"},
            {"title" : "Mozilla", "content":"Visual Identity for Wyre company product"},
            {"title" : "Wyre", "content":"Visual Identity for Wyre company product"},
            
        ];
        let classScroll = "";
        if (this.props.isInViewport) {
			classScroll = "view-in";
		} 
        return(
            <Section id="home-third" className={classScroll}>
                <Container>
                    <Dflex>
                        <ClientWrapper className="view-in-opacity">
                            {this.props.clients.map((d,i)=>
                                <Card
                                    title={d.Client_name}
                                    key={i}
                                    img={typeof d.Client_image !== "undefined" ? d.Client_image.url : ""}
                                    content={d.Client_desc}
                                />
                            )}
                            {this.props.clients.map((d,i)=>
                                <Card
                                    title={d.Client_name}
                                    key={i}
                                    img={typeof d.Client_image !== "undefined" ? d.Client_image.url : ""}
                                    content={d.Client_desc}
                                    

                                />
                            )}
                            {this.props.clients.map((d,i)=>
                                <Card
                                    title={d.Client_name}
                                    key={i}
                                    img={typeof d.Client_image !== "undefined" ? d.Client_image.url : ""}
                                    content={d.Client_desc}
                                    

                                />
                            )}
                        </ClientWrapper>
                        <TextWrapper>
                            <SectionSubTitle className="subtitle view-in-opacity">
                                {this.props.subtitle}
                            </SectionSubTitle>
                            <TextTitle className="title view-in-opacity">
                                {this.props.title}
                            </TextTitle>
                            <ParagraphText className="text view-in-opacity">
                                {this.props.desc}
                            </ParagraphText>
                        </TextWrapper>

                    </Dflex>
                </Container>
            </Section>
        )
    }
}
export default Watch(HomeTestimonial)