import styled from 'styled-components'

export const Section = styled.section`
    height:100vh;
    display :flex;
    align-items:center;
    transition : all ease-in-out 1s;
    transform:translateY(-10px);
    .view-in-opacity {
        transition:all ease 1s;
        opacity:0;
    }
    &.view-in {
        transform:translateY(0px);
        .view-in-opacity {
            opacity:1;
        }
    }
`;

export const Dflex = styled.div`
    display:flex;
`;

export const DflexCenter = styled(Dflex)`
    align-items:center;
    justify-content:center;
`;

export const SectionTitle = styled.h1`
    font-size:55px;
    line-height:1.2;
    letter-spacing:2px;
    color : ${({theme}) => theme.colors.dark};
    font-family : ${({theme}) => theme.font.title};
    margin-bottom:30px;
    @media (max-width:575.98px){
        font-size:48px;
    }
`;

export const SectionTitleSmall = styled.h3`
    font-size:35px;
    line-height:52px;
    letter-spacing:2px;
    color : ${({theme}) => theme.colors.dark};
    font-family : 'Airbnb Cereal App Medium',sans-serif;
    margin-bottom:50px;
    @media (max-width: ${({theme}) => theme.breakpoints.md}){
        font-size:30px;
        line-height:1.3;
        margin-bottom:30px;
    }
    @media (max-width: ${({theme}) => theme.breakpoints.sm}){
        font-size:28px;
        line-height:38px;
    }
`;

export const SectionSubTitle = styled.h6`
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: 1px;
    color : ${({theme}) => theme.colors.primary};
    font-family : 'Airbnb Cereal App Bold',sans-serif;
    margin-bottom:27px;
    @media (max-width:575.98px){
        font-size:16px;
        margin-bottom:18px;
        
    }
`;
export const LinkBold = styled.a`
    font-size: 34px;
    line-height: 54px;
    letter-spacing: 1px;
    font-family : 'Airbnb Cereal App Bold',sans-serif;
    
`;
export const ParagraphText = styled.p`
    font-size:18px;
    line-height:1.8;
    letter-spacing:.5px;
    color : ${({theme}) => theme.colors.dark};
    font-family : 'Airbnb Cereal App Light',sans-serif;
    @media (max-width:575.98px){
        font-size:16px;
    }
`;

export const SmallText = styled.p`
    font-size:14px;
    line-height:24px;
    letter-spacing:1px;
    word-break: break-word;
    font-family : 'Airbnb Cereal App Light',sans-serif;
`;
export const ParagraphTextMedium = styled.p`
    font-size:20px;
    line-height:33px;
    letter-spacing:1px;
    
    font-family : 'Airbnb Cereal App Medium',sans-serif;
`;
export const ParagraphTextLight = styled.p`
    font-size:20px;
    line-height:33px;
    letter-spacing:1px;
    
    font-family : 'Airbnb Cereal App Light',sans-serif;
`;

export const ParagraphTextLg = styled(ParagraphText)`
    font-size:32px;
    line-height:normal;

`;

export const TextTitle = styled.h4`
    font-size: 38px;
    font-family: 'Airbnb Cereal App Medium';
    line-height:normal;
    @media (max-width:575.98px){
        font-size:32px;
    }
`;

export const CardLG = styled.div`
    width:100%;
    border-radius:33px;
    padding:54px 50px;
`;

export const TextRight = styled.div`
    text-align:right;
`;

export const OrnamentHalfcircleGreen = styled.div`
    position:absolute;
    width:40px;
    height:40px;
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
    background-image:url(/static/images/img_greenshape.png);
`;
export const OrnamentHalfcircleBlue = styled.div`
    position:absolute;
    width:50px;
    height:50px;
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
    background-image:url(/static/images/img_shapeblue.png);
`;