import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, DflexCenter as DflexCenterGlobal, SectionTitle,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import Container from '../../components/container'
import WorksImgColor from '../../static/images/img_work_color.svg'
import WorksImgTeal from '../../static/images/img_work_teal.svg'

const Section = styled(SectionGlobal)`
    padding:130px 0 210px;
    background-color:#241d49;
    position:relative;
    height:auto;
    &:after{
        content:"";
        position:absolute;
        width:100%;
        bottom:-10px;
        left:0;
        height:97px;
        border-top-left-radius:100px;
        background-color:#4544e6;
    }
    &.full {
        height:100vh;

    }
`;
const Dflex = styled(DflexCenterGlobal)`
    >div{
        padding:0 121px;
        @media (max-width:767.98px){
            padding :0 10px;
        }
    }

`;
const ImgWrapper = styled.a`
    text-align:center;
    display:block;
    font-size:30px;
    line-height:40px;
    letter-spacing:.5px;
    color:#605986;
    font-family: 'Airbnb Cereal App Bold',sans-serif;
    transition:all ease .3s;
    cursor:pointer;
    display:flex;
    align-items:center;
    @media (max-width:767.98px){
        flex-direction:column;
        font-size:26px;
    }
    svg {
        height:87px;
        display :block;
        margin-right:70px;
        transition:all ease .3s;
        @media (max-width:767.98px){
            margin-right:0;
            margin-bottom :20px;
        }
    }
    &:hover{
        text-decoration:underline;
        color:#ffffff;
        
    }
`;
class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "work" : true
        }
    }
    onHover = (loc,st)=>{
        if(this.state[loc] !== st){
            this.setState({
                [loc]:st
            })
        }
        
    }
    render(){
        return(
            <Section className={this.props.className}>
                <Container>
                    <Dflex>
                        <div>
                            <ImgWrapper onMouseEnter={this.onHover.bind(this,'work',false)} onMouseLeave={this.onHover.bind(this,'work',true)}>
                                {
                                    this.state.work === true ?
                                    <WorksImgTeal/>
                                    :
                                    <WorksImgColor/>
                                }
                                View more works
                            </ImgWrapper>
                        </div>
                    </Dflex>
                </Container>
            </Section>
            
        )
    }
}
export default Footer