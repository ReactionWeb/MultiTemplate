import React from 'react';
import {Container, Grid, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {componentProps} from "../ComponentInterface";
import {useStyles} from "../Styles";

const Paragraph = (props : componentProps) => {
    const styles = useStyles();

    return(
        <Container className={styles.container}>
            <Grid container justify={props.justify}>
                <Paper >
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
        </Container>
    )
}

export default Paragraph;