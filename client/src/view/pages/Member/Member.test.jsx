import Member from './Member';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from './../../../redux/store/store';
import { Provider } from 'react-redux';

const MemberTest = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Member />
      </Provider>
    </BrowserRouter>
  );
};

describe('Member component', () => {
  test('Should render the Member component', () => {
    render(<MemberTest />);
  });
});
