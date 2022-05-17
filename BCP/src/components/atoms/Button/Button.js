import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  margin: 15px 0;
  padding: 7px 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export default Button;

//   padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
//   font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
