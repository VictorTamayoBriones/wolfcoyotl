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
`;