import React from 'react'
import '../style/HomePage.css'
import BannerComponent from '../components/BannerComponent'
import CardComponent from '../components/CardComponent'
import SliderComponent from '../components/SliderComponent'
import AboutComponent from '../components/AboutComponent'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className='HomePage'>
        
            <BannerComponent />
        
        
          <CardComponent />
       
          <SliderComponent />
          <AboutComponent />
          <ContactUs />
          <Footer />
    </div>
  )
}

export default HomePage