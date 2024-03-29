import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {useStyles} from "../Styles";

function Copyright() {
    return (
      <Typography variant="body2" color="textPrimary">
        {'Copyright © '}
        <Link color="inherit" href="https://vk.com/antonfilaretov">
          Reaction
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer1 = () =>{
    const styles = useStyles();
    return(
        <footer className={styles.footer1}>
            <Container maxWidth="sm">
              <Typography variant="body1">My sticky footer can be found here.</Typography>
              <Copyright />
            </Container>
        </footer>
    )
}

export default Footer1;