import React from 'react';
import './assets/styles/App.scss';

import AppRoutes from './routes/AppRoutes';
import CustomThemeProvider from './HOC/CustomThemeProvider/CustomThemeProvider';

function App() {
  return (
    <CustomThemeProvider>
      <AppRoutes />
    </CustomThemeProvider>
  );
}

export default App;
