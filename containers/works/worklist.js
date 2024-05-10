import React from 'react'
import styled from 'styled-components'
import {Section as SectionGlobal, DflexCenter as DflexCenterGlobal, SectionTitle,ParagraphText as ParagraphTextGlobal} from '../../components/content'
import ContainerGlobal from '../../components/container'
import HeroSvg from '../../static/images/works/img-header-bg.svg'
import Dribbble from '../../static/images/dribbble-logo.svg'
import {ButtonPrimaryInvert,ButtonLink} from '../../components/button.js'
import { connect } from 'react-redux'
import Link from 'next/link'
import LazyLoad from "react-lazyload";
import { getWorksListByCat} from '../../actions/actions'

const HeroSvgWrapper = styled.div`
    max-width:669px;
    padding-right:89px;
`;
const TextWrapper = styled.div`
    padding-top:254px;
    padding-bottom:106px;
    position:relative;
    z-index:1;
    width:730px;
`;
const ParagraphText = styled(ParagraphTextGlobal)`
    max-width:493px;
`;
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

const DflexCenter = styled(DflexCenterGlobal)`
    @media (max-width : 767.98px){
        flex-direction:column;
    }
`;
const HomeSVG = styled(HeroSvg)`
    position :absolute;
    bottom:0;
    left :100px;
    width :1168px;
`;
const ButtonFilter = styled(ButtonPrimaryInvert)`
    padding :13px 28px;
    margin-right:15px;
    color:#2b304d;
    background:transparent;
    border:none !important;
    font-family:Airbnb Cereal Light Reg,sans-serif;
    font-weight:500;
    letter-spacing:1px;
    &:focus {
        outline:none;
    }
    &.selected {
        
        background-color:#e4e4fd;
        color:#4544e6;
    }
`;

const ButtonGroup = styled.div`
    white-space:nowrap;
    @media (max-width:991.98px){
        margin:0 -20px;
        padding:0 20px 15px;
        overflow-x:scroll;
    }
`;

const WorklistWrapper = styled.div`
    display:flex;
    padding:88px 61px 100px;
    margin-left :-85px;
    margin-right:-85px;
    flex-wrap:wrap;
    @media(max-width:991.98px){
        max-height:none;
        padding:60px 10px 0;
        margin-left -10px;
        margin-right:-10px;
    }
    .worklist-empty {
        text-align:center;
        display:block;
        width:100%;
        font-family :Airbnb Cereal Light Reg,sans-serif;
        padding-bottom:80px;
    }


`;
const WorkItem = styled.div`
    width:50%;
    padding :0 85px;
    margin-bottom:0;
    display:inline-block;
    @media(max-width:991.98px){
        padding :0;
        width:100%;
        margin-bottom :60px;
    }
    @media(min-width:992px){
        &:nth-child(even){
            margin-top:100px;
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
    max-width:1090px;
`;
const WorkCaption = styled(ParagraphTextGlobal)`
    @media (min-width:768px){
        padding-right:126px;
    }
`;
const WorkDribbble = styled.a`
    font-size:18px;
    letter-spacing:0.5px;
    color:#f26798;
    display:flex;
    align-items:center;
    white-space:nowrap;
    font-family: Airbnb Cereal App Bold,sans-serif;
    line-height:30px;
    text-decoration:none;
    svg {
        width:60px;
        height:60px;
        margin-right:21px;
    }
    span {
        border-bottom:1px solid #f26798;
    }
    @media (max-width:767.98px){
        margin-top:30px;
    }
`;
const WorkCaptionWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-bottom:130px;
    @media (max-width:767.98px){
        flex-direction:column;
        justify-content:center;
        padding-bottom:60px;
        text-align:center;
    }
`;
class Worklist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeClasses : [],
            activeAllCat : true
        }
        this.addActiveClass= this.addActiveClass.bind(this);
    }
    componentDidMount = () => {
        let totalCat = typeof this.props.workcategories === "undefined" ? 0 :this.props.workcategories.length;
        this.setState({
            activeClasses : Array(totalCat).fill(false)
        })
    }
    renderList = (dt,i) => {
        return (
            
            <WorkItem key={i}>
                
                <LazyLoad>
                    <WorkItemImg>
                        <Link href='/works/detail?id=[dt.id]' as={`/works/detail?id=${dt.id}`} >
                            <img src={typeof dt.Hero_image !== "undefined" ? process.env.API_ENDPOINT+dt.Hero_image.url : ""}/>                    
                            </Link>
                    </WorkItemImg>
                </LazyLoad>
               
                <WorkItemText>
                <Link href='/works/detail?id=[dt.id]' as={`/works/detail?id=${dt.id}`} ><h3>{dt.Hero_title}</h3></Link>
                    <p>{dt.Hero_subtitle.substr(0,100)}{dt.Hero_subtitle.length > 100 && '...'}</p>
                </WorkItemText>
            </WorkItem>
            
        )
    }
    addActiveClass = (index,catId) => {
        let activeClasses = Array(this.state.activeClasses.length).fill(false);
        activeClasses[index] = true;
        this.setState({activeClasses : activeClasses, activeAllCat : false});
        this.props.dispatch(getWorksListByCat(catId));
    }
    addActiveAllCat = () => {
        let activeClasses = Array(this.state.activeClasses.length).fill(false);
        
        this.setState({activeClasses : activeClasses, activeAllCat : true});

        this.props.dispatch(getWorksListByCat());
    }

    renderButton = (dt,i) => {
        const activeClasses = this.state.activeClasses;
        return (
            
            <ButtonFilter key={i} className={activeClasses[i]? "selected" : ""}  onClick={() => this.addActiveClass(i,dt.id)}>
                {dt.Category_name}
            </ButtonFilter>
            
        )
    }
    
    render(){
        let dribbbleLink = this.props.works.length > 0 ? this.props.works[0].Dribbble_url : "";
        return(
            <Section id="home-hero">
                <Container>
                    <ButtonGroup>
                        <ButtonFilter onClick={() => this.addActiveAllCat()} className={this.state.activeAllCat && "selected"}>All Categories</ButtonFilter>
                        {
                            this.props.workcategories.length > 0 && 
                            this.props.workcategories.map(this.renderButton)
                        }
                        
                    </ButtonGroup>
                    <WorklistWrapper>
                        {
                            this.props.workslist.length > 0 ?
                            this.props.workslist.map(this.renderList)
                            :
                            <h1 className="worklist-empty">Ooops, that page couldn't be found</h1>
                        }
                         
                        
                        
                    </WorklistWrapper>
                    <WorkCaptionWrapper>
                        <WorkCaption>
                        {
                            this.props.works.length >0 ?
                            this.props.works[0].Desc : 
                            ""
                        }
                        </WorkCaption>
                        <WorkDribbble href={dribbbleLink}>
                            <Dribbble/>
                            <span>Check out on Dribbble</span>
                        </WorkDribbble>
                    </WorkCaptionWrapper>
                </Container>
            </Section>
        )
    }
}
const mapStateToProps = state => {
    return { works:state.works,workslist : state.workslist, workcategories : state.workcategories};
  };

  

  const mapDispatchToProps = dispatch => ({
    ...getWorksListByCat,
    dispatch                // ← Add this
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Worklist)