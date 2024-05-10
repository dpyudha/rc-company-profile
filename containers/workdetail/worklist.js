import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, DflexCenter as DflexCenterGlobal, SectionTitle as SectionTitleGlobal,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import ContainerGlobal from '../../components/container'
import {ButtonPrimaryInvert} from '../../components/button.js'
import { connect } from 'react-redux'
import Link from 'next/link'



const Section = styled(SectionGlobal)`
    height:auto;
    display:flex;
    align-items:center;
    position :relative;
    padding-top:104px;
    @media (max-width:767.98px){
        padding-top:0px;
    }
`;



const WorklistWrapper = styled.div`
    display:flex;
    padding:88px 0;
    margin-left :-85px;
    margin-right:-85px;
    flex-wrap:wrap;
    
    @media(max-width:991.98px){
        max-height:none;
        padding:60px 0 0;
        margin-left 0;
        margin-right:0;
    }
`;
const WorkItem = styled.div`
    flex:0 0 50%;
    padding :0 85px;
    margin-bottom:112px;
    display:inline-block;
    @media(max-width:991.98px){
        flex:0 0 100%;
        padding:0;
        margin-bottom :60px;
    }
    @media(max-width:767.98px){
        padding:0;
    }
    &:nth-child(3){
        @media(min-width:768px){
            >div:first-child {
                height:600px;
                margin-top:116px;
            }
        }
    }
`;
const WorkItemImg = styled.div`
    height : 540px;
    cursor:pointer;
    
    width:100%;
    border-radius:4px;
    margin-bottom:38px;
    overflow:hidden;
    transition:all ease .3s;
    &:hover{
        transform:translateY(-2px);
        box-shadow:0 22px 64px -4px rgba(97,99,159,0.12);
    }
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`;
const WorkItemText = styled.div`
    padding-left :100px;
    
    h3 {
        font-family: Airbnb Cereal App Bold,sans-serif;
        font-size: 20px;
        line-height: 1.5;
        letter-spacing: 0.5px;
        color: #2b304d;
        margin-bottom:18px;
        position:relative;
        cursor:pointer;
    
        &:before {
            content:"";
            position:absolute;
            width:60px;
            height:1px;
            background-color: #151828;
            left :-100px;
            top:15px;
        }
    }
    p {
        font-family: Airbnb Cereal App Lt,sans-serif;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.5px;
        color: #7d819d;
    }
`;
const Container = styled(ContainerGlobal)`
    max-width:1000px;
`;

const SectionTitle = styled(SectionTitleGlobal)`
font-size:48px;
line-height:58px;`;
class Worklist extends React.Component {
    
    renderList = (dt,i) => {
        console.log()
        if(i < 2){
            return (
                
                <WorkItem key={i}>
                    <Link  href='/works/detail?id=[dt.id]' as={`/works/detail?id=${dt.id}`}>
                    <WorkItemImg>
                        <img src={typeof dt.Hero_image !== "undefined" ? process.env.API_ENDPOINT+dt.Hero_image.url : ""}/>
                    </WorkItemImg>
                    </Link>
                    <WorkItemText>
                    <Link  href='/works/detail?id=[dt.id]' as={`/works/detail?id=${dt.id}`}><h3>{dt.Hero_title}</h3></Link>
                        <p>{dt.Hero_subtitle.substr(0,30)}...</p>
                    </WorkItemText>
                </WorkItem>
                
            )
        }
    }
    
    render(){
        
        return(
            <Section id="home-hero">
                <Container>
                    <SectionTitle>Browse more projects</SectionTitle>
                    <WorklistWrapper>
                        {
                            this.props.workslist.length > 0 &&
                            this.props.workslist.map(this.renderList)
                        }
                        
                    </WorklistWrapper>
                    
                </Container>
            </Section>
        )
    }
}

const mapStateToProps = state => {
    return { workslist:state.workslist};
  };

  
  export default connect(mapStateToProps,null)(Worklist)