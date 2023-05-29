import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import MentorOl from './MentorOl';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/mentor-ol' element={<MentorOl />} />
        <Route path='/' element={<HomePage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
