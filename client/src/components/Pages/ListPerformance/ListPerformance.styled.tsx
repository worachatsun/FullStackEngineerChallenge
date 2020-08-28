import styled from "styled-components";

export const FlexAlignCenter = styled.div`
    display: flex;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Lable = styled.div`
    font-size: 1.5em;
    margin-bottom: 20px;
`;

export const Table = styled.div`
    text-align: left;
    width: 90%;
    padding: 20px;
    box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.div`
    display: "flex";
`;

export const Th = styled.div`
    font-size: 1.1em;
    display: flex;
`;

export const Tr = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    height: 40px;
    border: 1px solid #ff0033;
    border-radius: 5px;
    color: #ff0033;

    &:hover {
        color: white;
        background: #ff0033;
    }
`;

export const Hr = styled.hr`
    border: 1px solid #444140;
    opacity: 0.5;
`;

export const ThText = styled.div`
    margin-left: 10px;
`;

export const TrText = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 50%;
`;

export const AnswerContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-around;
    font-size: 1em;
`;
