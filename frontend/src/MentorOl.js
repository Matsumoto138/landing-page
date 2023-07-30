import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { FormControl, TextField, Button, Checkbox, FormControlLabel, Input, Modal,Box } from '@mui/material'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Check from './images/check-min.png'



const styles = theme => ({
  field: {
    margin: '10px 0',
  },
  countryList: {
    ...theme.typography.body1,
  },
});

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

function MentorOl() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [linkedinProfile, setLinkedinProfile] = useState("")
  const [school, setSchool] = useState("")
  const [job, setJob] = useState("")
  const [experience, setExperience] = useState(0)
  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(false)
  const [error, setError] = useState(null)

  const [modal, setModal] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const applicant = {
      name,
      email,
      phoneNumber,
      linkedinProfile,
      school,
      job,
      experience,
    }

    const response = await fetch('http://localhost:4000/api/applicants', {
      method: 'POST',
      body:JSON.stringify(applicant),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if(response.ok){
      setError(null)
      handleOpen()
    }
  }

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <>
  
    <div className='Mentor-Ol'>
      
        <div className="Title"><h1>Mentor Ol</h1></div>
        <form onSubmit={(e) => {handleSubmit(e)}} className="mentor-form">
          <FormControl>
            <TextField className='mentor-input' name='name' value={name} onChange={(e) => setName(e.target.value)} type='text' label="İsmin-Soyismin" variant="outlined" required />
            <TextField className='mentor-input' name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="e-mail" label="E-Posta Adresin" variant="outlined" required />
            
            <TextField className='mentor-input' name='phone' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type='text' label="Telefon Numaran" variant="outlined" required />
            <TextField className='mentor-input' name='linkedin' value={linkedinProfile} onChange={(e) => setLinkedinProfile(e.target.value)} type='text' label="Linkedin Profilin" variant="outlined" />
            <TextField className='mentor-input' name='school' value={school} onChange={(e) => setSchool(e.target.value)} type='text' label="Okulun-Bölümün" variant="outlined" required />
            <TextField className='mentor-input' name='job' value={job} onChange={(e) => setJob(e.target.value)} type='text' label="Mesleğin" variant="outlined" required />
            <TextField className='mentor-input' name='expreience' value={experience} onChange={(e) => setExperience(e.target.value)} type='number' label="Alanında Kaç Yıllık Deneyimin Var?" variant="outlined" required />
            <label style={{color:'#F15A59'}}>* Zorunlu Alanlar</label>
            <FormControlLabel required  control={<Checkbox name='checkbox1' value={checkbox1} onChange={(e) => setCheckbox1(e.target.value)} />} label="KVKK metnini onaylıyorum.*" />
            <FormControlLabel required  control={<Checkbox name="checkbox2" value={checkbox2} onChange={(e) => setCheckbox2(e.target.value)} />} label="İletişim kanallarından benimle iletişime geçilmesini onaylıyorum.*" />
            <Button type='Submit' variant="outlined" style={{background:'white'}} >Gönder</Button>
          </FormControl>
        </form>
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
          <h4>Başvurunu Aldık !</h4>
        </div>
        <Button className="modal-button" onClick={()=>{
          handleClose()
          navigate('/')
          }}>Tamam</Button>
      </Box>
      </Modal>
    </>
  )
}

export default MentorOl