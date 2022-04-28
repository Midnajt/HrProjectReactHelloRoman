import React from 'react';
import { users } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UserList.styles';

const UsersList = () => (
  <Wrapper>
    <div>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </StyledList>
    </div>
  </Wrapper>
);

export default UsersList;
