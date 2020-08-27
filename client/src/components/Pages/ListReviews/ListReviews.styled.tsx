import styled from 'styled-components';

export const FlexAlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled(FlexAlignCenter)`
  width: 100%;
  flex-direction: column;
`;

export const Wrapper = styled(FlexAlignCenter)`
  width: 70%;
  flex-direction: column;
`;

export const ListHeader = styled(FlexAlignCenter)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 0 0 30px 0;
`;

export const Table = styled.div`
  text-align: left;
  width: 100%;
  padding: 20px;
  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.1);
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
`;

export const Hr = styled.hr`
  border: 1px solid #444140;
  opacity: 0.5;
`;

export const Lable = styled.div`
  font-size: 1.5em;
`;

export const TrText = styled.div`
  margin-left: 10px;
`;
