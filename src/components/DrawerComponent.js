import { Drawer, IconButton, List, ListItemButton, ListItemIcon} from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import React, {useState} from "react";
import Hamburger from '../images/Hamburger.png'

const DrawerComponent = () =>{

    const [openDrawer, setOpenDrawer] = useState(false)

    return(

        <div >
        <React.Fragment>
            <Drawer PaperProps={{sx: {width: '100%'}}} className="Drawer" open={openDrawer} onClose={() => {setOpenDrawer(false)}}>
                <button className="Close-Button" onClick={() => {setOpenDrawer(!openDrawer)}}>
                    <CancelIcon />
                </button>
                
                <List className="Drawer-List">
                    <ListItemButton sx={{margin:'20px'}}>
                        Ana Sayfa
                    </ListItemButton>
                    <ListItemButton sx={{margin:'20px'}}>
                        Hakkımızda
                    </ListItemButton>
                    <ListItemButton sx={{margin:'20px'}}>
                        Bize Ulaşın
                    </ListItemButton>
                </List>
                
            </Drawer>
            <button sx={{width:'30px', height:'60px'}} className="Hamburger-Button"  onClick={() => {setOpenDrawer(!openDrawer)}}>
                    <img  src={Hamburger} alt=""/>
                </button>
        </React.Fragment>
        </div>
    )
}

export default DrawerComponent