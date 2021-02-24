import React from 'react';
import {Button,Dialog, Container, DialogTitle, DialogContent, DialogContentText,TextField, DialogActions} from "@material-ui/core"
//open={open} onClose={handleClose}
//onClick={handleClickOpen}

function Registr(){


    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }

const LogIn = () =>{
    const [open, setOpen] = React.useState(false)
    return(
        <Container>
        <Button style={{color:"white"}} onClick={handleClickOpen} >Вход</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Войти</DialogTitle>
                <DialogContent>
                    <DialogContentText>Войдите что-бы получить яой</DialogContentText>
                    <TextField
                    autoFocus
                    
                    id="name"
                    label="Email"
                    type="email"
                    fullWidth
                    />
                    <TextField
                    autoFocus
                    
                    id="name"
                    label="Password"
                    type="password"
                    fullWidth
                    />
                    
                </DialogContent>
                <DialogActions>
                    <Button style={{color:"white"}} onClick={handleClose}>Отмена</Button>
                    <Button style={{color:"white"}} onClick={handleClose}>Войти</Button>
                </DialogActions>
        </Dialog>
          </Container>
    )
}
}
export default Registr;