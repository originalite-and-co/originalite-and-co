import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../../redux/store/store';
import MyProfile from './MyProfile';
import { Provider } from 'react-redux';
import CustomThemeProvider from '../../../HOC/CustomThemeProvider/CustomThemeProvider';
import React from 'react';

const customer = { name: 'Derek', lastName: 'Chesora' };
const fn = jest.fn();

const MyProfileTest = () => {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <MyProfile customer={customer} handleDataUpdate={fn} />
        </Provider>
      </BrowserRouter>
    </CustomThemeProvider>
  );
};

describe('MyProfile component', () => {
  test('Should render the MyProfile component', () => {
    render(<MyProfileTest />);
  });

  test('Should contain the necessary fields', () => {
    render(<MyProfileTest />);

    const currentEmailField = screen.getByText(/Current email address/);
    const currentNameField = screen.getByText(/Current name/);
    const currentLastNameField = screen.getByText(/Current last name/);
    const currentMobileNumberField = screen.getByText(/Current mobile number/);
    const currentBirthdayField = screen.getByText(/Current birthdate/);

    expect(currentEmailField).toBeInTheDocument();
    expect(currentNameField).toBeInTheDocument();
    expect(currentLastNameField).toBeInTheDocument();
    expect(currentMobileNumberField).toBeInTheDocument();
    expect(currentBirthdayField).toBeInTheDocument();
  });

  test('Should contain the update data button', () => {
    render(<MyProfileTest />);
    const updateBtn = screen.getByText(/UPDATE DATA/);
    expect(updateBtn).toBeInTheDocument();
  });
});
