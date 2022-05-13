import React, { useState } from 'react';
import { users as usersData } from 'data/users.js';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);

    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add user</Link>
          </nav>
          <Routes>
            <Route
              path="/add-user"
              exact
              element={<Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />}
            ></Route>
            <Route path="/" exact element={<UsersList deleteUser={deleteUser} users={users} />}></Route>
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
