import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LandingPage from './Components/LandingPage/LandingPage';
import Contests from './Components/ContestPage/Contests';
import CreateContest from './Components/ContestPage/CreateContest';
import Contest from './Components/ContestPage/Contest';
import Register from './Components/Forms/Signup';
function App() {
  return (
      
        <Routes>
          <Route path="/" Component={LandingPage} />
          
          <Route path="/contests" Component={Contests} />
          <Route path="/contest/:id" Component={Contest}></Route>
          <Route path="/createContest" Component={CreateContest} />
          
        </Routes>
  
    );
}

export default App;
