import './App.css';
import Home from './screens/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;