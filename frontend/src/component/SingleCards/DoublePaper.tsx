import React from 'react';
import {Box, Container, makeStyles, Paper, Typography} from "@material-ui/core";
import {useStyles} from "../Styles"
import {componentProps} from "../ComponentInterface";
import OverlayFilling from "../Overlays/OverlayFilling";


const DoublePaper = (props:componentProps) => {
    const styles = useStyles();
    return(
        <Box className={styles.content} style={{marginBottom:"50pt"}}>
            <Paper className={styles.backPaper} >
                <OverlayFilling/>
                <Paper className={styles.frontPaper} >
                    {props.children}
                    <Typography> АААААы</Typography>
                </Paper>
            </Paper>
        </Box>
    )
}

export default DoublePaper;