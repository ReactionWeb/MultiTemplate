import React from 'react';
import {AppBar,Toolbar,ListItem,IconButton,ListItemText,Avatar,Divider,List,Typography,Box,Button} from "@material-ui/core"
import {ArrowBack,Assessment,Home,Apps,ContactMail} from "@material-ui/icons"
import imglogo from "../../static/images/logo3.png";
import Registr from '../logIn/LoginSide';
import {custom_theme} from "../../theme/custom_theme"
import {componentProps} from "../ComponentInterface";


const logo = {

}

const Header2 = (props : componentProps) =>{

    return(
        <AppBar position="static" color={"primary"}>
            <Toolbar>
                <IconButton>
                    <ArrowBack style={{color:"white" }}/>
                </IconButton>
                <img src={imglogo}  />
                <Button style={{color:"white"}} >Вход</Button>

            </Toolbar>
        </AppBar>
    )
}

export default Header2;