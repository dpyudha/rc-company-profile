import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, DflexCenter as DflexCenterGlobal, SectionTitle as SectionTitleGlobal,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import ContainerGlobal from '../../components/container'
import { connect } from 'react-redux'

const SectionTitle = styled(SectionTitleGlobal)`
    font-size:48px;
    line-height:58px;
    &.text-white{
        color:#fff;
    }
    @media (max-width:575.98px){
        font-size:32px;
        line-height:38px;
        margin-bottom:20px;
    }
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    max-width:550px;
    margin-left:auto;
    margin-right:auto;
    padding-bottom:80px;
    &.text-white{
        color:#fff;
    }
    @media (max-width:991.98px){
        padding-bottom:50px;
    }
    color:#687089;
    @media (max-width:575.98px){
        font-size:14px;
        line-height:26px;
    }
`;
const Container = styled(ContainerGlobal)`
    text-align:center;
    &.container-wireframe{
        max-width:1000px;
    }
`;
const Image = styled.div`
    img {
        width:100%;
        @media (max-width:575.98px){
            height:222px;
            object-fit:cover;
        }
        
    }
`;
const Section = styled.section`
    height:auto;
    padding-top:202px;
    overflow:hidden;
    padding-bottom:100px;
    position:relative;

    @media (max-width:575.98px){
        padding-top:70px;
    }
    &:after {
        content :"";
        position:absolute;
        height:417px;
        width:100%;
        display:block;
        background-color: #EDF3FC;
        z-index:-1;
        bottom:0;
        left:0;
    }
    >div {
        text-align:left;
        p {
            margin-left:0;
            max-width:400px;
        }
    }
`;
const WireframeWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-left:-55px;
    margin-right:-55px;
    >div {
        flex:0 0 50%;
        @media (max-width:767.98px){
            flex:0 0 100%;
        }
        img {
            width:100%;
            box-shadow:-24px 8px 64px rgba(13, 37, 99, 0.16);
        }
        &:nth-child(2){
            @media (min-width:768px){
                margin-top:-230px;
            }
        }
    }

`;
const BgEl = styled.div`
    display:block;
    top:0;
    position:absolute;
    width:100%;
    height:800px;
    background:#EDF3FC;
`;
const ImgWrapper = styled.div`
    padding:0 55px;
    margin-bottom:20px;
    @media (max-width:767.98px){
        margin-bottom:30px;
    }
    
`;
class Wireframe extends React.Component {
    renderList = (dt,i) => {
        let images = process.env.API_ENDPOINT+dt.url;
        return (
            
            <ImgWrapper key={i}>
                <img src={images} alt={dt.name}/>
            </ImgWrapper>
            
        )
    }
    render(){
        let title = "",
        subtitle = "",
        wireframe_image = "",
        Wireframelist_title = "",
        Wireframelist_subtitle = "",
        Wireframelist_images_length = typeof this.props.workslistsingle.Wireframelist_images !== "undefined" ? this.props.workslistsingle.Wireframelist_images.length : 0;

        // if(typeof this.props.workslistsingle.Wireframelist_images !== "undefined")
            let Wireframelist_images_divider = Math.round(Wireframelist_images_length / 2);
            if(typeof this.props.workslistsingle.Hero_title !== "undefined"){
                title = this.props.workslistsingle.Wireframe_title;
                subtitle = this.props.workslistsingle.WIreframe_subtitle;
                wireframe_image = process.env.API_ENDPOINT+this.props.workslistsingle.Wireframe_image.url;
                Wireframelist_title = this.props.workslistsingle.Wireframelist_title;   
                Wireframelist_subtitle = this.props.workslistsingle.Wireframelist_subtitle;
            }
        

        return(
            <React.Fragment>
                <section>
                    <Container>
                        <SectionTitle>{title}</SectionTitle>
                        <ParagraphText>{subtitle}</ParagraphText>
                        
                    </Container>
                    <Image>
                            <img src={wireframe_image} alt={title}/>
                    </Image>
                </section>
                <Section className="wireframe-detail">
                    <BgEl></BgEl>
                    <Container className="container-wireframe">
                        <SectionTitle >{Wireframelist_title}</SectionTitle>
                        <ParagraphText >{Wireframelist_subtitle}</ParagraphText>
                        <WireframeWrapper>
                            <div>
                                {
                                    typeof this.props.workslistsingle.Wireframelist_images_left !== "undefined" &&
                                    this.props.workslistsingle.Wireframelist_images_left.length > 0 &&
                                    this.props.workslistsingle.Wireframelist_images_left.map(this.renderList)
                                }
                                
                            </div>
                            <div>
                                {
                                    typeof this.props.workslistsingle.Wireframelist_images_right !== "undefined" &&
                                    this.props.workslistsingle.Wireframelist_images_right.length > 0 &&
                                    this.props.workslistsingle.Wireframelist_images_right.map(this.renderList)
                                }
                                
                            </div>
                            
                            
                        
                        </WireframeWrapper>
                    </Container>
                </Section>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return { workslistsingle:state.workslistsingle};
  };

  
  export default connect(mapStateToProps,null)(Wireframe)