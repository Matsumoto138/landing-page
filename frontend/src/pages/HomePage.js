import React, {useRef, useEffect, useState} from 'react'
import { Routes, Router } from 'react-router-dom'
import { Container } from '@mui/material'
import '../style/HomePage.css'
import BannerComponent from '../components/BannerComponent'
import CardComponent from '../components/CardComponent'
import SliderComponent from '../components/SliderComponent'
import AboutComponent from '../components/AboutComponent'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <div className='HomePage'>

      
      <BannerComponent />
      <CardComponent />
      <SliderComponent />
      <AboutComponent  />
      <ContactUs  />
      
    </div>
    
  )
}

export default HomePage