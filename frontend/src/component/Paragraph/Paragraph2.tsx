import React from 'react';
import {Container, Grid, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {componentProps} from "../ComponentInterface";
import {useStyles} from "../Styles";

const Paragraph2 = (props : componentProps) => {
    const styles = useStyles();

    return(
        <Container>
            <Grid container
                  direction="column"
                  alignItems={props.alignItems}
                  justify={props.justify}>

                <Paper>
                    {props.children}
                </Paper>

                <Grid container item md={props.md} spacing={props.spacing} >
                    {/*renderParagraph()*/}
                    <Grid item >

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
            </Grid>
   </Container>
    
    ) 
 }  

export default Paragraph2;