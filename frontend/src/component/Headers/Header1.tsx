import React from 'react';
import {AppBar, Box, Toolbar, Button} from "@material-ui/core";

const Header1 = () => {
    return(
        <Box>
            <AppBar position="fixed">
                <Toolbar>
                    <Button color="inherit">Вход</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header1;