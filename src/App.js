import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path ="/" element={<Home />} />
          <Route path ="/SignUp" element={<SignUp/>} />
          <Route path ="/Login" element={<Login/>} />
        </Routes>
      </Router>
      </div>
    
  );
}

export default App;
