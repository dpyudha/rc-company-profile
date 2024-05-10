import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, Dflex as DflexGlobal, SectionTitleSmall as SectionTitleSmallGlobal,SectionTitle as SectionTitleGlobal,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import ContainerGlobal from '../../components/container'
import { getHomeClient } from '../../actions/actions' 
import { connect } from 'react-redux'
import LazyLoad from "react-lazyload";
const Container = styled(ContainerGlobal)`
    max-width:1250px;
`;

const Section = styled(SectionGlobal)`
    padding-top:25px;
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

const ClientText = styled(DflexGlobal)`
    margin-left:-15px;
    margin-right:-15px;
    >div {
        padding:0 15px;
    }
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        flex-wrap:wrap;
        text-align:center;
    }
`;
const ClientTitle = styled.div`
    flex:0 0 50%;
    max-width:50%;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        flex:0 0 100%;
        max-width:100%;
    }
`;

const ParagraphText = styled(ParagraphTextGlobal)``;

const TextWrapper = styled.div`
    flex:0 0 50%;
    max-width:50%;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        flex:0 0 100%;
        max-width:100%;
    }
`;
const SectionTitleSmall = styled(SectionTitleSmallGlobal)`
    padding-left:94px;
    padding-top:21px;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        padding-left :0;
        margin-bottom:20px;
    }
`;

const ClientListWrapper = styled(DflexGlobal)`
    margin:26px -15px 0;
    flex-wrap:wrap;
    
`;

const ClientCard = styled.div`
    border-radius:8px;
    box-shadow: 0 12px 64px -4px rgba(97, 99, 159, 0.12);
    background-color: #ffffff;
    padding:40px 24px;
    width:100%;
    margin-bottom:30px;
    cursor:pointer;
    transition:all ease-out .2s;
    &:hover {
        transform:translateY(-1px);
        box-shadow: 0 20px 64px -4px rgba(97, 99, 159, 0.12);
    }
    .client-img{
        text-align:center;
        height:104px;
        margin-bottom:15px;
    }
    
    img{
        max-width:100%;
        max-height: 104px;
        padding:0 30px;
        margin:0px auto;
    }
    
`;
const ClientCardWrapper = styled.div`
    flex:0 0 25%;
    max-width:25%;
    padding:0 15px;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        flex:0 0 50%;
        max-width:50%;
    }
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        flex:0 0 100%;
        max-width:100%;
    }
  
`;
const ClientCardTitle = styled.h5`
    font-size:20px;
    line-height:1.5;
    letter-spacing:.5px;
    color: #2b304d;
    font-weight:bold;
    font-family : 'Airbnb Cereal App Bold',sans-serif;
    margin-bottom:14px;
`;
const ClientCardText = styled(ParagraphTextGlobal)`
    font-size:16px;
    color: #7d819d;
    line-height:1.5;
`;
class Client extends React.Component {
    componentWillMount = () =>{
        this.props.dispatch(getHomeClient());
    }
    render(){
        let title = "",
        desc = "";
        if(typeof this.props.studio[0] !== "undefined"){
            title = this.props.studio[0].Section_client_title,
            desc = this.props.studio[0].Section_client_desc;
        }
        return(
            <Section >
                <Container>
                    <ClientText>
                        <ClientTitle>
                            <SectionTitleSmall>
                                {title}
                            </SectionTitleSmall>
                        </ClientTitle>
                        <TextWrapper>
                            <ParagraphText>{desc}</ParagraphText>
                        </TextWrapper>
                        
                    </ClientText>
                    
                    <ClientListWrapper>
                        
                        {
                            
                            this.props.homeclients.map((d,i)=>
                                <ClientCardWrapper key={i}>
                                    <ClientCard>
                                        <div className="client-img">
                                        <LazyLoad>
                                        <img src={typeof d.Client_image !== "undefined" ? process.env.API_ENDPOINT+d.Client_image.url : ""} alt="wyre"/>
                                        </LazyLoad>
                                        </div>
                                        <ClientCardTitle>{d.Client_name}</ClientCardTitle>
                                        <ClientCardText>
                                        {d.Client_desc}
                                        </ClientCardText>
                                    </ClientCard>

                                </ClientCardWrapper>
                            )
                        }
                        
                    </ClientListWrapper>
                </Container>
            </Section>
        )
    }
}
const mapStateToProps = state => {
    return { homeclients: state.homeclients,studio:state.studio };
  };
  const mapDispatchToProps = dispatch => ({
    ...getHomeClient,
    dispatch                
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Client)