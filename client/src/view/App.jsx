import React from 'react';
import './assets/styles/App.scss';
import AppRoutes from './routes/AppRoutes';
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <AppRoutes/>
            <Footer/>
        </div>
    );
}

export default App;
