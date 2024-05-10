import styled from 'styled-components'
import LazyLoad from "react-lazyload";
const CardWrapper = styled.div`
    padding : 40px 18px 40px 30px;
    border-radius: 8px;
    box-shadow: 0 12px 64px -4px rgba(97, 99, 159, 0.12);
    background-color: #ffffff;
    @media (max-width:767.98px){
        padding:20px;
    }
    
    img {
        width: auto;
        max-width:100%;
        max-height:60px;
        
        margin: 15px auto 40px;
    }
    h2 {
        font-size:20px;
        line-height:1.5;
        letter-spacing:.5px;
        color :${({theme}) => theme.colors.dark};
        font-family : 'Airbnb Cereal App Bold',sans-serif;
        @media (max-width:767.98px){
            font-size:16px;
        }

    }
    p {
        font-size:16px;
        line-height:1.5;
        font-family : 'Airbnb Cereal App Light',sans-serif;
        color:${({theme}) => theme.colors.secondary};
        letter-spacing : .5px;
        @media (max-width:767.98px){
            font-size:12px;
        }

    }
`;

class Card extends React.Component {
    render(){
        const {title,content,img} = this.props;
        return(
            <CardWrapper>
                <LazyLoad><img src={process.env.API_ENDPOINT+img}/></LazyLoad>
                <h2>{title ? title : 'Title'}</h2>
                <p>{content ? content : 'This is content'}</p>
            </CardWrapper>
        )
    }
}

export default Card