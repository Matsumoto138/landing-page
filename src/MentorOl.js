import React, {useState} from 'react'
import { FormControl, TextField, Button } from '@mui/material'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer'


const styles = theme => ({
  field: {
    margin: '10px 0',
  },
  countryList: {
    ...theme.typography.body1,
  },
});

function MentorOl() {


  const[phoneNumber, setPhoneNumber] = useState('')

  const handlePhoneChange = (value) =>{
    setPhoneNumber(value)
  }

  return (
    <>
    <Navbar />
    <div className='Mentor-Ol'>
      
        <div className="Title"><h1>Mentor Ol</h1></div>
        <div className="mentor-form">
          <FormControl>
            <TextField className='mentor-input' type='text' label="İsmin-Soyismin" variant="outlined" required />
            <TextField className='mentor-input' type="e-mail" label="E-Posta Adresin" variant="outlined" required />
            <label style={{color:'rgba(0, 0, 0, 0.6)'}}>Telefon Numaran</label>
            <PhoneInput
              
              country={'tr'} 
              className='mentor-input'
            />         
            <TextField className='mentor-input' type='text' label="Linkedin Profilin" variant="outlined" />
            <TextField className='mentor-input' type='text' label="Okulun-Bölümün" variant="outlined" required />
            <TextField className='mentor-input' type='text' label="Mesleğin" variant="outlined" required />
            <TextField className='mentor-input' type='number' label="Alanında Kaç Yıllık Deneyimin Var?" variant="outlined" required />
            <Button variant="outlined" style={{background:'white'}} >Gönder</Button>
          </FormControl>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default MentorOl