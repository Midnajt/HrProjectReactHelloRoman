import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.lightgrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;
