import React from 'react';
import {AppBar, Box, Toolbar, Button} from "@material-ui/core";

const Header1 = () => {
    return(
        <Box>
            <AppBar position="fixed">
                <Toolbar color={"primary"}>
                    <Button color="inherit">Вход</Button>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </Box>
    )
}

export default Header1;