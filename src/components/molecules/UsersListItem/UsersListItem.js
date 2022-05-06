import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper, StyledAverage, StyledDiv } from './UserListItem.styles';

const showIndex = (index) => alert(`This is student #${index + 1}`);

function UsersListItem({ index, userData: { average, name, attendance = '0%' } }) {
  return (
    <Wrapper>
      <StyledAverage average={average}>{average}</StyledAverage>
      <StyledDiv>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </StyledDiv>
      <Button onClick={() => showIndex(index)}></Button>
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
