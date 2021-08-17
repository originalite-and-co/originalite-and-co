import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './view/App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import ErrorBoundary from './view/components/ErrorBoundary/ErrorBoundary';
import Toast from './view/components/Toast/Toast';
import './view/assets/styles/index.scss';
import * as cloudinaryReact from 'cloudinary-react';

const errorToast = (
  <Toast
    message="An error has occurred. Please try again later"
    severity="error"
  />
);

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallback={errorToast}>
      <BrowserRouter>
        <Provider store={store}>
          <cloudinaryReact.CloudinaryContext cloudName="originalite-and-co">
            <App />
          </cloudinaryReact.CloudinaryContext>
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
