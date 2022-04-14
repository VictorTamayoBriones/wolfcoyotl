import styled from 'styled-components';
import { theme } from '../../theme';

export const Card = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
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
    width: 200px;
    height: 300px;
`;

export const CardMusicImage = styled.div`
    width: 100%;
    height: 200px;
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
`;