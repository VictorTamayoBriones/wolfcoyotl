import styled from 'styled-components';
import imageHero from '../../images/hero.jpg'
import { theme } from '../../theme';

export const Hero = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${imageHero});
    background-attachment: fixed;
    background-size: cover;
    color: ${ theme.blanco };
    font-size: 70px;
    letter-spacing: 3px;
    text-shadow: 2px 3px 1px ${ theme.negroTraslucido };
    overflow: hidden;
    h1{
        &:nth-child(odd){
            animation: title-animation-odd 18s 9s infinite linear;
        }
        &:nth-child(even){
            animation: title-animation-even 15s 9s infinite linear;
        }
    }
    
    @keyframes title-animation-odd {
        0%{
            transform: translateY(0px);
        }
        25%{
            transform: translateY(50px);
        }
        50%{
            transform: translateY(-50px);
        }
        75%{
            transform: translateY(0px);
        }
    }

    @keyframes title-animation-even {
        0%{
            transform: translateY(0px);
        }
        25%{
            transform: translateY(-50px);
        }
        50%{
            transform: translateY(50px);
        }
        75%{
            transform: translateY(0px);
        }
    }

    @media(max-width: 1000px){
        font-size: 50px;
        height: 45vh;
        background-size: contain;
        background-repeat: no-repeat;
    }

    @media(max-width: 800px){
        align-items: flex-start;
        background-size: 150%;
        background-position-x: center;
        font-size: 30px;
    }

    @media(max-width: 630px){
        align-items: flex-start;
        height: 50vh;
        background-size: 200%;
        background-position-x: center;
        font-size: 30px;
    }
`;