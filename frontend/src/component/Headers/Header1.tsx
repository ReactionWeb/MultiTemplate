import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {AppBar, Box, Toolbar} from "@material-ui/core";

const Header1 = () => {
    return(
        <Box>
            <AppBar position="fixed">
                <Toolbar>{/* содержимое */}</Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    )
}

export default Header1;