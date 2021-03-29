import React, {useState} from 'react';
import {Container, Grid, Paper, Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {componentProps} from "../ComponentInterface";
import {useStyles} from "../Styles";
// @ts-ignore
import {useRequest} from "../../state/State";


const Paragraph = (props : componentProps) => {
    const styles = useStyles();

    const state = useRequest('http://localhost:1337/testContent', props.component_index);

    return(
        <Container>
            <Grid container justify={props.justify} >
                <Paper>
                    {props.children}
                </Paper>
                <Grid item md={props.md} >
                    <div className={styles.contentTransparentBg}>
                        <Typography variant="h4" gutterBottom>
                            {props.mainTitle}
                        </Typography>
                        <Typography variant="h6" paragraph>
                            {props.mainContent}
                        </Typography>
                        <Button variant={"contained"} color={"primary"}>
                            More
                        </Button>
                        {state}
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Paragraph;