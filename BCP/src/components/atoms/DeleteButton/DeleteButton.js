import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledBtn } from './DeleteButton.styles';

const DeleteButton = (props) => (
  <StyledBtn {...props}>
    <DeleteIcon />
  </StyledBtn>
);

export default DeleteButton;
