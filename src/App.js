import './App.css';
import React from 'react';
import Post from './components/Post/Post';
import {Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import User from './components/User/User';
import { BrowserRouter as Router, } from "react-router-dom";
function App() {
  return (
    <div className="App">
     
      <Router>
        <Navbar></Navbar>
        <hr></hr>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/users/:userId" element={<User/>} />
          
      </Routes>
      </Router>
    </div>
  );
}

export default App;
