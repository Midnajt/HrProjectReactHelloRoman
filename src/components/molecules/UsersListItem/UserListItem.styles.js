import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledAverage = styled.div`
  width: 25px;
  height: 25px;
  padding: 1rem;
  // background-color: ${({ theme }) => theme.colors.success};
  background-color: ${({ average, theme }) => (average ? chooseBgcColor(average, theme) : theme.colors.warning)};
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function chooseBgcColor(value, theme) {
  if (value < 2) {
    return theme.colors.error;
  } else if (value >= 2 && value < 4) {
    return theme.colors.warning;
  } else {
    return theme.colors.success;
  }
}

export const StyledDiv = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p {
    margin: 0;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
