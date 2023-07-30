import React,{createElement, useState} from "react";
import Instagram from '../images/instagram_logo.png'
import Linkedin from '../images/linkedin_logo.png'
import { FormControl, TextField, Button, Modal, Box } from '@mui/material';
import { Link } from 'react-router-dom'
import Check from '../images/check-min.png'

const styleModal = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItem:'center',
    justifyContent:'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '600px',
    minWidth: '200px',
    bgcolor: '#f1f1f1',
    border: '1px solid rgba(49, 49, 49, 0.8)',
    boxShadow: 24,
    p: 4,
  };

function ContactUs(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState(null)
    const [modal, setModal] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const textMessage = {
            name,
            email,
            message
        }

        const response = await fetch('http://localhost:4000/api/messages', {
            method:"POST",
            body:JSON.stringify(textMessage),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const json = await response.json()

        if(!response){
            setError(json.error)
        }
        if(response){
            setError(null)
            handleOpen()
        }
    }

    const handleOpen = () => setModal(true);
    const handleClose = () => setModal(false);

    return(
        <>
        <div className="ContactUs" id="contact">
            <div className="Contact-up">
            <div className="Title"><h1>Bize Ulaşın</h1></div>
            <div className="Icons">
                <Link className='link' to='https://www.instagram.com/mobimenti.co/' target='_blank' >
                    <img src={Instagram} alt="" />
                </Link>
                <Link className='link' to='https://www.linkedin.com/company/mobi̇menti̇/' target='_blank' >
                    <img src={Linkedin} alt="" />
                </Link>
            </div>
            </div>
            <div className="Contact-down">
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <FormControl>
                    <TextField className="contact-input" value={name} onChange={(e) => {setName(e.target.value)}} type="text" variant="outlined" label="İsim-Soyisim" required />
                    <TextField className="contact-input" value={email} onChange={(e) => {setEmail(e.target.value)}} type="e-mail" label="E-Posta Adresin" required />
                    <TextField className="contact-input" value={message} onChange={(e) => {setMessage(e.target.value)}} type="text" label="Ne Söylemek İstersin?" variant="outlined" required sx={{"& .MuiInputBase-root": {height: 150}}} />
                    <Button type="Submit" variant="outlined" >Gönder</Button>
                    </FormControl>
                </form>
            </div>
        </div>
        <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={styleModal}>
        <div className="modal-image">
          <img src={Check} alt="" />
        </div>
        <div className="modal-text">
          <h4>Mesajını Aldık !</h4>
        </div>
        <Button className="modal-button" onClick={()=>{
          handleClose()
          
          }}>Tamam</Button>
      </Box>
      </Modal>
        </>
    )
}

export default ContactUs