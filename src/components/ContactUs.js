import React from "react";
import Instagram from '../images/instagram_logo.png'
import Linkedin from '../images/linkedin_logo.png'
import { FormControl, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom'

function ContactUs(){
    return(
        <div className="ContactUs" id="contact">
            <div className="Contact-up">
            <div className="Title"><h1>Bize Ulaşın</h1></div>
            <div className="Icons">
                <Link className='link' to='https://www.instagram.com/mobi.menti/' target='_blank' >
                    <img src={Instagram} alt="" />
                </Link>
                <Link className='link' to='https://www.linkedin.com/company/mobi̇menti̇/' target='_blank' >
                    <img src={Linkedin} alt="" />
                </Link>
            </div>
            </div>
            <div className="Contact-down">
                <FormControl>
                    <TextField className="contact-input" type="text" variant="outlined" label="İsim-Soyisim" required />
                    <TextField className="contact-input" type="e-mail" label="E-Posta Adresin" required />
                    <TextField className="contact-input" type="text" label="Ne Söylemek İstersin?" variant="outlined" required sx={{"& .MuiInputBase-root": {height: 250}}} />
                    <Button variant="outlined" >Gönder</Button>
                </FormControl>
            </div>
        </div>
    )
}

export default ContactUs