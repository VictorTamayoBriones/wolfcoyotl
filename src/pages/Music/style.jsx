import styled from 'styled-components';

export const Releases = styled.section`
    width: 90%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;

    @media (max-width: 700px){
        width: 95%;
        justify-content: space-between;
        gap: 0;
    }
`;