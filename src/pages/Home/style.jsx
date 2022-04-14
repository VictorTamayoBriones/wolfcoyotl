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
    background-size: cover;
    color: ${ theme.blanco };
    font-size: 70px;
    letter-spacing: 3px;
    text-shadow: 2px 3px 1px ${ theme.negroTraslucido };
    h1{
        &:nth-child(odd){
            animation: title-animation-odd 12s 7s infinite linear;
        }
        &:nth-child(even){
            animation: title-animation-even 12s 7s infinite linear;
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
`;