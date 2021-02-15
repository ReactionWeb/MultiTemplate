import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Container, Grid, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {componentProps} from "../ComponentInterface";
import {useStyles} from "../Styles";

const AvatarCircle = (props : componentProps) => {
    const styles = useStyles();
    return (
        <Container className={styles.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                        <Paper className={styles.paperAvatar}>
                            <Avatar alt="Sts" src="/static/images/sas.jpg" />
                            {props.mainContent}
                        </Paper>
                </Grid>
            </Grid>
        </Container>
      )
} 

export default AvatarCircle;