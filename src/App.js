import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import MainLayout from './components/MainLayout';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path ="/" element={<Home />} />
          <Route path ="/SignUp" element={<SignUp/>} />
          <Route path ="/Login" element={<Login/>} />
          <Route path ="/MainLayout" element={<MainLayout />} />
        </Routes>
      </Router>
      </div>
    
  );
}

export default App;
