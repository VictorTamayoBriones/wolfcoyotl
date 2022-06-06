import styled from 'styled-components';

export const Releases = styled.section`
    width: 90%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 700px){
        width: 95%;
        gap: 30px;
    }
`;