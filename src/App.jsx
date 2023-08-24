import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage/Login';
import Second from './components/Second1';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/second" element={<Second/>}/>
    </Routes>
  </Router>
  );
}
export default App;
