import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledBtn } from './Button.styles';

// React.createElement('button',{propsy},'dziecko np txt')
// React.createElement('button',{onClick},'Złóż zamowienie')

const Button = (props) => (
  <StyledBtn {...props}>
    <DeleteIcon />
  </StyledBtn>
);

export default Button;
