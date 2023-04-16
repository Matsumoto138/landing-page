import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import { Button } from '@mui/material'

function SliderComponent() {
  return (
    <div className='Slider-Component'>
        <div className="Slider-Title">
            <h1>Seni Neler Bekliyor</h1>
        </div>
        <div className="Slider">
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable:true,
                }}
                modules={[Mousewheel, Pagination]}
                className='Swiper'
            >

                <SwiperSlide>
                    <div className="Slider-Text">
                        <h4>Bilgi ve deneyimlerinle birçok gencin hayatına dokunabilirsin.</h4>
                        <Button variant="contained" sx={{borderRadius:'20px', width:"150px", height:"50px", background: "linear-gradient(to left,#7978FF,#1D1CE5)"}} >Mentor Ol</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider-Text">
                        <h4>Bilmediklerini keşfetmek, mentor olmanın sana sunduğu bir hediye olurken bildiklerini 
                        hatırlamak da bu sürecin sana başka bir armağanı olur.</h4>
                    </div>
                    <Button variant="contained" sx={{borderRadius:'20px', width:"150px", height:"50px", background: "linear-gradient(to left,#7978FF,#1D1CE5)"}} >Mentor Ol</Button>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider-Text">
                        <h4>Farklı kişilerle mentorluk yaparak gelişirsin.</h4>
                        <Button variant="contained" sx={{borderRadius:'20px', width:"150px", height:"50px", background: "linear-gradient(to left,#7978FF,#1D1CE5)"}} >
                            Mentor Ol
                        </Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider-Text">
                        <h4>Mentilerin gelişim gösterirken kendi kör noktalarını öğrenmelerine benzer şekilde, 
                            sen de mentor olarak bir öğrenme sürecinde olursun. Bu, son derece kıymetlidir.</h4>
                        <Button variant="contained" sx={{borderRadius:'20px', width:"150px", height:"50px", background: "linear-gradient(to left,#7978FF,#1D1CE5)"}} >
                            Mentor Ol
                        </Button>
                    </div>
                    
                </SwiperSlide>

            </Swiper>
        </div>
        
    </div>
  )
}

export default SliderComponent