import styled from 'styled-components';
import { theme } from '../../theme';

export const Navigation = styled.nav`
    width: 100%;
    background: ${ theme.negroTraslucido };
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    gap: 20px;
    font-size: 20px;
    font-weight: 300;
    p{
        display: block;
        color: ${ theme.blanco };
        padding: 3px 12px;
        border: solid 1px ${ theme.blanco };
        border-radius: 50px;
        letter-spacing: 1.5px;
    }
    ul{
        width: 100%;
        display: flex;
        justify-content: center;
        list-style: none;
        gap: 30px;
        a{
            color: ${ theme.blanco };
            display: block;
            width: 100%;
            text-decoration: none;
            &:hover{
                text-decoration: underline ${ theme.blanco };
            }
        }
    }

    @media (max-width: 600px){
        ul{
            gap: 0;
            justify-content: space-between;
        }
    }
`;