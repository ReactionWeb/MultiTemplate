import React, {useState} from 'react';
import {Container, Grid, Paper, Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {componentProps} from "../ComponentInterface";
import {useStyles} from "../Styles";

const Paragraph = (props : componentProps) => {
    const styles = useStyles();
    let container = (props.container) ? "hidden" : "visible";
    let box = (!props.container) ? "hidden" : "visible";

    return(
        <Box>
            <Container className={styles.container} style={{display: "hidden"}}>
            <Box className={styles.container} style={{visibility: "hidden"}}>
                <div style={{visibility: "visible"}}>
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
                                <Button variant={"contained"} color={"secondary"}>
                                    More
                                </Button>

                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            </Container>
        </Box>
    )
}

export default Paragraph;