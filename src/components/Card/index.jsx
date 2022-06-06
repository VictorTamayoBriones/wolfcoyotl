import styled from 'styled-components';
import { theme } from '../../theme';

export const Card = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;

    @media (max-width: 700px){
        width: 100%;
        margin: 0 0 30px 0;
    }
`;

export const CardImage = styled.div`
    width: 100%;
    height: 300px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const CardBody = styled.div`
    width: 100%;
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    letter-spacing: 1px;
    h4{
        font-size: 18px;
    }
    p{
        line-height: 25px;
    }
`;

export const CardMusic = styled.div`
    width: 30%;
    height: max-content;
    margin: 20px 0;

    @media (max-width: 1111px){
        width: 45%;
        
    }
    
    @media (max-width: 440px){
        width: 100%;
        position: relative;
        overflow: hidden;
    }
`;

export const CardMusicImage = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 5px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const CardMusicBody = styled.div`
    width: 100%;
    h5{
        font-size: 18px;
        margin: 10px 0px;
    }
    span{
        color: ${ theme.gris };
    }

    @media (max-width: 440px){
        position: absolute;
        background: #00000090;
        color: #fff;
        bottom: 0;
        padding: 5px 10px;
        border-radius: 0 0 5px 5px;
    }
`;