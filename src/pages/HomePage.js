import React from 'react'
import '../style/HomePage.css'
import BannerComponent from '../components/BannerComponent'
import CardComponent from '../components/CardComponent'
import SliderComponent from '../components/SliderComponent'
import AboutComponent from '../components/AboutComponent'

function HomePage() {
  return (
    <div className='HomePage'>
        
            <BannerComponent />
        
        
          <CardComponent />
       
          <SliderComponent />
          <AboutComponent />
    </div>
  )
}

export default HomePage