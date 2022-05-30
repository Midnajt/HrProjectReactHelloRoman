import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Eldrad' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '100%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '5.0' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Eldrad');
  });
});
