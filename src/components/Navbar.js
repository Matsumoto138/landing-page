import React, {useState} from 'react'
import Logo from '../images/Logo.png'
import DrawerComponent from './DrawerComponent'

import { AppBar, Tab, Tabs, Toolbar } from '@mui/material'


function Navbar() {

    const [value, setValue] = useState(0)

  return (
    
    <React.Fragment>
        <AppBar className='Navbar' sx={{background:'linear-gradient(to left,#7978FF,#1D1CE5);'}}>
            <Toolbar className='Toolbar'>
                <div className="Logo">
                    <img src={Logo} alt="" srcset="" />
                </div>
                <div className="Menu">
                    <nav>
                        <Tabs value={value} onChange={(e, value) => {setValue(value)}} textColor='white' indicatorColor='secondary'>
                            <Tab label="Ana Sayfa" />
                            <Tab label="Hakkımızda" />
                            <Tab label="Bize Ulaşın" />
                            
                        </Tabs>
                        
                    </nav>
                    
                </div>
                <DrawerComponent />
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar