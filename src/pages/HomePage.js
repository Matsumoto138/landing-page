import React, {useRef, useEffect, useState} from 'react'
import { Routes, Router } from 'react-router-dom'
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

      <Navbar />
      <BannerComponent />
      <CardComponent />
      <SliderComponent />
      <AboutComponent  />
      <ContactUs  />
      <Footer />
    </div>
  )
}

export default HomePage