import React from 'react'
import Banner from '../images/Group-min-removebg.png'
import { Button, Container } from '@mui/material'
import {useNavigate} from 'react-router-dom'

function BannerComponent() {

  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/mentor-ol')
  }

  return (
    <Container>

    
    <div className='Banner'>
        <div className="Banner-img">
            <img src={Banner} alt="" />
        </div>
        <div className="Banner-text">
            <h1 className='Banner-Title'>
                Öğretirken öğren, liderlik et, <br />
                bağ kur, geliş.
            </h1>
            <p className='Banner-subtext'>
            Mobimenti, gençlerin kariyer yolculuğunu destekleyen bir mentor ağı oluşturuyor.
            <br /><br /> Mentor olarak daha etkin bir lider, geniş bir ağ ve güçlü bir kariyer inşa etmeye hazır ol!

            </p>
            <div className="Banner-Button">
            <Button onClick={handleClick} variant="contained" sx={{borderRadius:'20px', width:"150px", height:"50px", background: "linear-gradient(to left,#7978FF,#1D1CE5)"}} >Mentor Ol</Button>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default BannerComponent