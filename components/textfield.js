import styled from 'styled-components'
import React from 'react'
import IconSvg from '../static/images/ic-attach-file.svg'

const FieldWrapper = styled.div`
    width:100%;
    position:relative;
    margin-bottom :52px;
    &:before{
        content :"";
        width:100%;
        height:1px;
        background:#7d819d;
        z-index:2;
        position:absolute;
        left:0;
        bottom:0;
    }
    &:after{
        content :"";
        width:100%;
        height:1px;
        background:#4544e6;
        z-index:2;
        position:absolute;
        left:0;
        bottom:0;
        width:0;
    }
    @media (max-width:767.98px){
        margin-bottom:30px;
    }
    
    &.textarea {
        &:after,&:before{
            bottom:2px;
        }
    }
    &.file {
        @media (max-width:575.98px){
            label {
                &:first-child {
                    max-width:152px;
                    overflow:hidden;
                    white-space:nowrap;
                    text-overflow:ellipsis;
                }
            }
        }
        .file-btn{
            color:#4544e6;
        }
    }
    label{
        font-family : 'Airbnb Cereal App Light',sans-serif;
        font-size:18px;
        line-height:1.5;
        color:#7d819d;
        letter-spacing:0.5px;
        position:absolute;
        top:0;
        left:0;
        transform:translateY(22px);
        transition: all ease .3s;
        transform-origin:0% 0;
    }
    .field {
        -webkit-appearance:none;
        border:none;
        background:transparent;
        font-family : 'Airbnb Cereal App Light',sans-serif;
        font-size:18px;
        padding:22px 0px 15px;
        width:100%;
        position:relative;
        z-index:2;
        outline:none;
        &:focus{
            outline:none;
            +label{
                transform:translateY(0) scale(0.8);
                color:#4544e6;
            }
        }
        
    }
    textarea.field{
        height:110px;
        max-width:100%;
        padding-top:50px;
        @media (max-width:767.98px){
            padding-top:45px;
        }
    }

    &.hasValue,&.onFocus{
        &:after{
            width:100%;
        }
        .field {
            outline:none;
            +label{
                transform:translateY(0) scale(0.8)
            }
        }
    }

`;
const FileWrapper = styled.div`
    display :flex;
    padding:22px 0px 15px;
    justify-content:space-between;
    input {
        display:none;
    }
    label {
        position:relative;
        transform:translate(0,0);
        cursor:pointer;
    }
`;
class Textfield extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fieldvalue : "",
            onfocus : false
        }
        this.onChangeHandle = this.onChangeHandle.bind(this)
    }
    onChangeHandle = (e) => {
        this.setState({
            fieldvalue : e.target.value
        })
    }
    onFocusHandle = (e) => {
        this.setState({
            onfocus : true
        })
        console.log('asd')
    }
    onBlurHandle = (e) => {
        this.setState({
            onfocus : false
        })
    }
    onClickFile = (e) => {
        console.log(e)
    }
    render(){
        return(
            <FieldWrapper className={(this.state.fieldvalue.length > 0 && "hasValue ") +" "+ (this.state.onfocus && "onFocus")+" "+this.props.type}>
               {
                   this.props.type === "textarea" ? 
                   <textarea className="field" onFocus={this.onFocusHandle} onBlur={this.onBlurHandle} onChange={this.onChangeHandle}></textarea>
                   :
                   this.props.type === "file" ? 
                   <FileWrapper>
                        
                        <label>{this.props.label}</label>
                        <label className="file-btn" onClick={this.onClickFile}>Attach doc <IconSvg/></label>
                        <input type="file"/>
                   </FileWrapper>
                   :
                   <input className="field" type={this.props.type} onFocus={this.onFocusHandle} onBlur={this.onBlurHandle} onChange={this.onChangeHandle} />
               }
               {
                   this.props.type !== "file" &&
                   <label>{this.props.label}</label>
               }
               
            </FieldWrapper>
        )
    }
}

export default Textfield