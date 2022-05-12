import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, StyledDiv } from './UserListItem.styles';

function UsersListItem({ deleteUser, userData: { average, name, attendance = '0%' } }) {
  return (
    <Wrapper>
      <StyledAverage average={average}>{average}</StyledAverage>
      <StyledDiv>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </StyledDiv>
      <DeleteButton
        onClick={() => {
          deleteUser(name);
        }}
      ></DeleteButton>
    </Wrapper>
  );
}

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
