import React from 'react';
import {AppBar,Toolbar,ListItem,IconButton,ListItemText,Avatar,Divider,List,Typography,Box,Button} from "@material-ui/core"
import {ArrowBack,Assessment,Home,Apps,ContactMail} from "@material-ui/icons"
import imglogo from "../../static/images/logo3.png";
import Registr from '../logIn/LoginSide';


const logo = {

}

const Header2 = () =>{

    return(
        <Box component="nav">
            <AppBar position="static" style={{background:"#000340" }} >
                <Toolbar >
                    <IconButton>
                        <ArrowBack style={{color:"white" }}/>
                    </IconButton>
                    <img src={imglogo}  />
                    <Button style={{color:"white"}} >Вход</Button>
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header2;