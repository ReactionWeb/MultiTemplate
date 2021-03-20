import React from 'react';
import {AppBar, Box, Toolbar, Button} from "@material-ui/core";
import {custom_theme} from "../../theme/custom_theme"

const Header1 = () => {
    return(
        <Box>
            <AppBar position="fixed">
                <Toolbar color={custom_theme.palette.primary.dark}>
                    <Button color="inherit">Вход</Button>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </Box>
    )
}

export default Header1;