import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal,CardLG as CardLGGlobal, Dflex as DflexGlobal, SectionTitleSmall as SectionTitleSmallGlobal,SectionTitle as SectionTitleGlobal,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import ContainerGlobal from '../../components/container'
import { connect } from 'react-redux'

const Container = styled(ContainerGlobal)`
    max-width:1250px;
`;



const Section = styled(SectionGlobal)`
    padding-top:0px;
    padding-bottom:75px;
    height:auto;
    display:flex;
    align-items:center;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        padding-bottom:40px;
    }
`;

const Dflex = styled(DflexGlobal)`
    margin-left:-15px;
    margin-right:-15px;
    margin-top:100px;
    flex-wrap:wrap;
    @media (max-width : 767.98px){
        flex-direction:column;
    }
`;
const CardLG = styled(CardLGGlobal)`
    background-image:url('/static/images/studio/img_omnifestocard_bg.svg');
    background-repeat:no-repeat;
    background-size:contain;
    background-position:right bottom ;
    padding-bottom :70px;
    overflow:hidden;
    background-color:#090a3d;
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        padding:40px 30px 220px;
    }
`;
const CardLabel = styled(SectionTitleSmallGlobal)`
    font-size:34px;
    line-height:1.29px;
    letter-spacing:.5px;
    color:#fff;
    margin-top:20px;
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        margin-top:0;
    }
`;
const CardTitle = styled(SectionTitleGlobal)`
    font-size:60px;
    line-height:70px;
    letter-spacing:2px;
    color:#fff;
    margin-bottom:80px;
    padding-top:10px;
    max-width:973px;
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        margin-top:0;
        font-size:38px;
        line-height:44px;
        margin-bottom:60px;
    }
`;
const CardLink = styled.a`
    font-size:24px;
    font-family : 'Airbnb Cereal App Medium',sans-serif;
    line-height:1.42;
    color:#fff;
`;
class Omnifesto extends React.Component {
    
    render(){
        let title = "",
        desc = "",
        url = "",
        urltext= "";
        if(typeof this.props.studio[0] !== "undefined"){
            title = this.props.studio[0].Big_card_title,
            desc = this.props.studio[0].Big_card_desc;
            url = this.props.studio[0].Big_card_link_url,
            urltext = this.props.studio[0].Big_card_link_text;
        }
        return(
            <Section >
                <Container>

                    <CardLG>
                        <CardLabel>{title}</CardLabel>
                        <CardTitle>{desc}</CardTitle>
                        <CardLink href={url}>{urltext}</CardLink>
                    </CardLG>
                    
                </Container>
            </Section>
        )
    }
}
const mapStateToProps = state => {
    return { studio:state.studio};
  };

  
  export default connect(mapStateToProps,null)(Omnifesto)
  