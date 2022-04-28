import React from 'react';
import PropTypes from 'prop-types';
import './UserListItem.css';

function UsersListItem({ userData: { average, name, attendance = '0%' } }) {
  return (
    <li className="result">
      <div className="result__item">{average}</div>
      <div className="result__item">
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </div>
      <button className="result__item">x</button>
    </li>
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
