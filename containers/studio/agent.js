import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, Dflex as DflexGlobal, SectionTitleSmall as SectionTitleSmallGlobal,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import ContainerGlobal from '../../components/container'

const Container = styled(ContainerGlobal)`
    max-width:1250px;
`;
const SectionTitleSmall = styled(SectionTitleSmallGlobal)`
    text-align:center;
`;
const HeroSvgWrapper = styled.div`
    max-width:569px;
    padding-right:138px;
    flex:0 0 569px;
    img {
        width:100%;
    }
`;
const TextWrapper = styled.div`
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    max-width:493px;
`;
const Section = styled(SectionGlobal)`
    padding-top:75px;
    padding-bottom:75px;
    height:auto;
    display:flex;
    align-items:center;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        padding-top:40px;
        padding-bottom:40px;
    }
`;

const Dflex = styled(DflexGlobal)`
    margin-left:-15px;
    margin-right:-15px;
    margin-top:100px;
    flex-wrap:wrap;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        margin-top:50px;
    }
    @media (max-width : 767.98px){
        flex-direction:column;
    }
`;

const AgentWrapper = styled.div`
    flex:0 0 25%;
    max-width:25%;
    padding:0 15px;
    margin-bottom:20px;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        flex:0 0 50%;
        max-width:50%;
    }
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        flex:0 0 100%;
        max-width:100%;
    }
    
`;
const AgentImg = styled.div`
    width:100%;
    height:300px;
    border-radius:33px;
    background-color:#4e51ab;
    display :block;
`;
const AgentDetail = styled.div`
    padding:30px 15px;
`;
const AgentName = styled.h5`
    font-size:20px;
    line-height:1.5;
    letter-spacing:0.5px;
    color: #2b304d;
    font-family : 'Airbnb Cereal App Bold',sans-serif;
`;
const AgentRole = styled.p`
    font-size:20px;
    line-height:1.5;
    letter-spacing:0.5px;
    color: #2b304d;
    font-family : 'Airbnb Cereal',sans-serif;
    font-weight:300;
`;

class Agent extends React.Component {
    renderAgent = (dt,i) => {
        return(
            <AgentWrapper key={i}>
                            <AgentImg></AgentImg>
                            <AgentDetail>
                                <AgentName>
                                    {dt.name}
                                </AgentName>
                                <AgentRole>{dt.role}</AgentRole>
                            </AgentDetail>
            </AgentWrapper>
        )
    }
    render(){
        var agents = [
            {"name":"Hamam Zai","role":"UI & UX Designer"},
            {"name":"Yusuf Nugroho","role":"Illustrator"},
            {"name":"Ilham Yoga","role":"UI & UX Designer"},
            {"name":"Ervan Rohmat","role":"Illustrator"},
            {"name":"Anggit Yuniar","role":"Design Director"},
            {"name":"We want you!","role":"Send yor CV"},
            
            
        ]
        return(
            <Section >
                <Container>
                    <SectionTitleSmall>Happiness Agents</SectionTitleSmall>
                    <Dflex>
                        
                        {agents.map(this.renderAgent)}
                        
                        
                    </Dflex>
                </Container>
            </Section>
        )
    }
}

export default Agent