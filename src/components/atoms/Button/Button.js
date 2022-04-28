import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledBtn } from './Button.styles';

const Button = () => (
  <StyledBtn>
    <DeleteIcon />
  </StyledBtn>
);

export default Button;
