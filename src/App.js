import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      
        <Routes>
          <Route path="/" Component={LandingPage} />
        </Routes>
  
    );
}

export default App;
