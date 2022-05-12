import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledBtn } from './Button.styles';

const Button = (props) => (
  <StyledBtn {...props}>
    <DeleteIcon />
  </StyledBtn>
);

export default Button;
