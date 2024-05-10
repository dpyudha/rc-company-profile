import styled from 'styled-components'
import React from 'react'
import CollaborateImgColor from '../static/images/img_collaborate_color.svg'
import CollaborateImgTeal from '../static/images/img_collaborate_teal.svg'
import WorksImgColor from '../static/images/img_work_color.svg'
import WorksImgTeal from '../static/images/img_work_teal.svg'

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
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        font-size:25px;
    }
    svg {
        height:87px;
        display :block;
        margin:0 auto 29px;
        transition:all ease .3s;
        @media (max-width: ${({theme}) => theme.breakpoints.sm}){
            margin:0 auto 19px;
        }  
    }
    &:hover{
        text-decoration:underline;
        color:#ffffff;
    }

`;
class ButtonIcon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "hover": false
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <ImgWrapper>
                {
                    this.props.type === "works" ?
                    !this.state.hover ?
                    <WorksImgColor/>
                    :
                    <WorksImgTeal/>
                    :
                    !this.state.hover ?
                    <CollaborateImgColor/>
                    :
                    <CollaborateImgTeal/>
                }
                {this.props.text}
            </ImgWrapper>
        )
    }
}

export default ButtonIcon