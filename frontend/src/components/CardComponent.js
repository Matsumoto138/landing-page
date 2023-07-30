import React from 'react'
import World from '../images/world-min.jpg'
import Select from '../images/select-min.jpg'
import Meeting from '../images/meeting-min.jpg'
import { Container } from '@mui/material'

function CardComponent() {
  return (
    <Container>
    <div className='Card-Component'>
        <div className="Card">
            <div className="Card-img">
                <img src={World} alt="" />
            </div>
            <div className="Card-Text">
                <div className="Card-Title"><h1>Mentorları Keşfet</h1></div>
                <div className="Card-Subtext">
                    <p>Kariyer adımlarında ilerlemek için istediğin kategorideki 
                    mentorları keşfet!</p>
                </div>
            </div>
        </div>
        <div className="Card">
            <div className="Card-img">
                <img src={Select} alt="" />
            </div>
                <div className="Card-Text">
                    <div className="Card-Title"><h1>İncele ve Seç</h1></div>
                    <div className="Card-Subtext">
                        <p>Mentorları incele ve birini seç!</p>
                    </div>
                </div>
        </div>
        <div className="Card">
            <div className="Card-img">
                <img src={Meeting} alt="" />
            </div>
                <div className="Card-Text">
                    <div className="Card-Title">
                        <h1>Randevu Al,
                        Görüşmeye Başla</h1>
                    </div>
                    <div className="Card-Subtext">
                        <p>
                        Randevunu alarak mentorunla
                        görüşmeye başla!
                        </p>
                    </div>
                </div>
        </div>
    </div>
    </Container>
  )
}

export default CardComponent