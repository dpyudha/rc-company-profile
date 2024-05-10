import styled from 'styled-components'
export const ButtonLink = styled.button`
    -webkit-appearance:none;
    border:none;
    padding:0;
    background:none;
    font-size:38px;
    line-height:52px;
    letter-spacing:2px;
    font-family : 'Airbnb Cereal App Bold',sans-serif;
`;
export const Button = styled.button`
    padding:16px 26px;
    border-radius:30px;
    font-family: Airbnb Cereal App Bold,sans-serif;
    font-size: 16px;
    font-weight: bold;
    border:none;
    cursor:pointer;
    &:focus{
        outline:none;
        box-shadow:none;
    }
`;

export const ButtonLG = styled(Button)`
    font-size:24px;
    font-weight:500;
    line-height:1.42;
    letter-spacing:1px;
    padding:15px 38px;
    border-radius:33px;

`;

export const ButtonPrimaryInvert = styled(Button)`
    background-color: ${({ theme }) => theme.colors.primaryInvert};
    border-color:${({ theme }) => theme.colors.primaryInvert};
    color:${({ theme }) => theme.colors.primary};
    &:focus{
        border:1px solid ${({ theme }) => theme.colors.primaryInvert};;
    }
`;

export const ButtonPrimary = styled(Button)`
    min-width :160px;
    background :${({ theme }) => theme.colors.primary};
    border-color:#f9fbfe;
    color:#fff;
`;
export const ButtonToggle = styled.button`
    background:transparent;
    border:none;
    outline:none;
    width:24px;
    height:17px;
    padding:0;
    position:relative;
    cursor:pointer;
    z-index:20;
    span {
        display:block;
        width:100%;
        height:2px;
        background-color : ${({theme}) => theme.colors.primary};
        transition: all ease-out .2s;
        &:nth-child(1){
            position:absolute;
            top :0;
            left:0;
        }
       
        &:nth-child(3){
            position:absolute;
            bottom:0;
            left:0;
        }
    }
    &.active{
        span{
            background:#fff;
            &:nth-child(1){
                transform:translate(0,8px) rotate(45deg);
            }
            &:nth-child(2){
                width:0;
            }
            &:nth-child(3){
                transform:translate(0,-7px) rotate(-45deg);
            }
        }
    }
`;
