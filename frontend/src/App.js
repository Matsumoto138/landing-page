import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom';
import MentorOl from './MentorOl';

function App() {

  return (
    <>
    <Navbar />
    <Container maxWidth="lg" className="App">
      
      <Routes>
        <Route path='/mentor-ol' element={<MentorOl />} />
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </Container>
    <Footer />
    </>
  );
}

export default App;
