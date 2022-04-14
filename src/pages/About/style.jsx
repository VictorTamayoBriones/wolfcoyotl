import styled from 'styled-components';

export const AboutSection = styled.section`
    width: 90%;
    height: max-content;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
`;

export const Information = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2{
        width: 100%;
        font-size: 100px;
        line-height: 100px;
        font-weight: 700;
    }
    p{
        line-height: 25px;
        letter-spacing: 1px;
    }
    button{
        background: #1659bc;
        width: 30%;
        color: #fff;
        border: none;
        padding: 5px 12px;
        border-radius: 3px;
        font-size: 18px;
        letter-spacing: 1px;
    }
`;

export const Image = styled.div`
    width: 45%;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 3px 3px 9px 2px rgba(0, 0, 0, 0.25);
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;