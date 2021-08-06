import React from 'react';
import './assets/styles/App.scss';

import AppRoutes from './routes/AppRoutes';


import { CardList } from './components/CardList';



function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
