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
  justify-content: space-around;
`;
