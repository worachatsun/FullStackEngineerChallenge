import styled from 'styled-components';

export const Lable = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 15px 0;
`;

export const QuestionText = styled.div`
  width: 60%;
`;

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
`;

export const HeaderContainer = styled(QuestionContainer)`
  height: 40px;
  align-items: center;
  font-size: 1.3em;
  color: #ff0033;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Radio = styled.input``;
