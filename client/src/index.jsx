import React from 'react';
import ReactDOM from 'react-dom';

import App from './view/App';
import Toast from './view/components/Toast/Toast';

import ErrorBoundary from './view/HOC/ErrorBoundary/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CloudinaryContext } from 'cloudinary-react';

import storeConfig from './redux/store/store';
import reportWebVitals from './reportWebVitals';
import './view/assets/styles/index.scss';

const errorToast = (
  <Toast
    message="An error has occurred. Please try again later"
    severity="error"
  />
);

const { store } = storeConfig;

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallback={errorToast}>
      <BrowserRouter>
        <Provider store={store}>
          <CloudinaryContext cloudName="originalite-and-co">
            <App />
          </CloudinaryContext>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
