import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`;

export const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
`;

export const Lable = styled.div`
    font-size: 1.5em;
    margin-bottom: 20px;
`;

export const Tag = styled.div`
    border: 1px solid #ff0033;
    border-radius: 3px;
    padding: 5px;
    margin: 5px;
    color: #ff0033;
`;

export const TagContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
`;
