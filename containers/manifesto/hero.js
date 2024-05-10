import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, DflexCenter as DflexCenterGlobal, SectionTitle as SectionTitleGlobal,SectionSubTitle as SectionSubTitleGlobal,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import  ContainerGlobal from '../../components/container'
import OrnamentSVG from '../../static/images/manifesto/img-pattern-omnifesto.svg'

const Container = styled(ContainerGlobal)`
    max-width:1131px;
    position:relative;
    @media (min-width:768px){
        padding-left:100px;
    }
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    max-width:493px;
`;
const Section = styled(SectionGlobal)`
    padding-top:461px;
    padding-bottom:96px;
    height:auto;
    overflow:hidden;
    @media (max-width:767.98px ){
        padding-top:153px;
    }
`;

const DflexCenter = styled(DflexCenterGlobal)`
    @media (max-width : 767.98px){
        flex-direction:column;
    }
`;
const SectionSubTitle = styled(SectionSubTitleGlobal)`
    font-size:42px;
    color:#2b304d;
    letter-spacing:1px;
    line-height:1.5;
    font-weight:800;
    text-decoration:underline;
    margin-bottom:58px;
    @media (max-width:767.98px ){
        font-size:28px;
        margin-bottom:30px;
    }

`;
const SectionTitle = styled(SectionTitleGlobal)`
    margin-bottom:78px;
    @media (max-width:767.98px){
        margin-bottom:50px;
    }
`;
const Ornament = styled(OrnamentSVG)`
    position:absolute;
    top:-218px;
    z-index:-1;
    width:calc(100% + 100px);
    left:-50px;
`;
class Hero extends React.Component {
    componentDidUpdate = () => {
        console.log(this.props.content)
    }
    render(){
        return(
            <Section >
                <Container>
                    <Ornament/>
                    <SectionTitle>{this.props.content.Title}</SectionTitle>
                    <SectionSubTitle dangerouslySetInnerHTML={{__html: this.props.content.Content}}>
                    </SectionSubTitle>
                    
                </Container>
            </Section>
        )
    }
}

export default Hero