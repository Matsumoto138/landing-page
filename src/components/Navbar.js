import React, {useState, useRef} from 'react'
import Logo from '../images/mobimenti-logo.png'
import { Menu, MenuItem, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Hamburger from '../images/Hamburger.png'
import { Link } from 'react-scroll';

import { AppBar, Tab, Tabs, Toolbar } from '@mui/material'


function Navbar(props) {

    const {refs} = props

    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)


    const handleCLick = (event) =>{
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const scrollComp = (whichComp) =>{
        console.log("push");
        console.log(whichComp);
        switch (whichComp){
            case 1:
                refs.seniNelerBekliyor.current?.scrollIntoView()
                console.log("pushed 1");
                break;

            case 2:
                refs.bizKimiz.current?.scrollIntoView({behavior:'smooth'})
                console.log("pushed 2");
                break;

            case 3:
                refs.bizeUlas.current?.scrollIntoView({behavior:'smooth'})
                console.log("pushed 3");
                break;
        }
    }

  return (
    
    <React.Fragment>
        <AppBar className='Navbar' sx={{background:'linear-gradient(to left,#7978FF,#1D1CE5);'}}>
            <Toolbar className='Toolbar'>
                <div className="Logo">
                    <img src={Logo} alt="" srcset="" />
                </div>
                <div className="Menu">
                    <nav>
                        <ul>
                            <Link className='navbar-link' activeClass="active" spy={true} smooth={true} offset={-70} duration={500}  to='slider'>Seni Neler Bekliyor</Link>
                            <Link className='navbar-link' activeClass="active" spy={true} smooth={true} offset={-70} duration={500}  to='about'>Biz Kimiz?</Link>
                            <Link className='navbar-link' activeClass="active" spy={true} smooth={true} offset={-70} duration={500}  to='contact'>Bize Ulaşın</Link>
                        </ul>
                        
                    </nav>
                    
                </div>
                <IconButton  onClick={handleCLick}>
                    <MoreVertIcon className='Hamburger-Button' sx={{color:'white'}} />
                </IconButton>
                
            </Toolbar>
                
        </AppBar>
        <Menu anchorEl={anchorEl} keepmounted open={Boolean(anchorEl)} onClose={handleClose} >
                    <MenuItem onClick={handleClose}>
                    <Link onClick={handleClose} className='navbar-link' activeClass="active" spy={true} smooth={true} offset={-70} duration={500}  to='slider'>Seni Neler Bekliyor</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <Link onClick={handleClose} className='navbar-link' activeClass="active" spy={true} smooth={true} offset={-70} duration={500}  to='about'>Biz Kimiz?</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <Link onClick={handleClose} className='navbar-link' activeClass="active" spy={true} smooth={true} offset={-70} duration={500}  to='contact'>Bize Ulaşın</Link>
                    </MenuItem>
                </Menu>
    </React.Fragment>
  )
}

export default Navbar