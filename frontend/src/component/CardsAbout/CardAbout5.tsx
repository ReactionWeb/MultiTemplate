import React from 'react';
import {Container, Grid, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {componentProps} from "../ComponentInterface";
import {useStyles} from "../Styles";
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';

const imgLink =
  "https://picsum.photos/600/400";

const CardAbout5 = (props : componentProps) => {
    const styles = useStyles();

    return(
        
        <Container className={styles.container}> 
        <Grid
        container
        direction="row"
        alignItems={props.alignItems}
        justify={props.justify}
        >
            
            <Grid container item md={6} spacing={props.spacing} >
                {/*renderParagraph()*/}
                <Grid item  >
           
                    <div className={styles.contentTransparentBg}>
                        <Typography variant="h2" gutterBottom>
                            {props.mainTitle}
                        </Typography>
                        <Typography variant="h6" paragraph>
                            <DoneOutlinedIcon/>
                            {props.mainContent}
                        </Typography>
                        
                        
                    </div>
            
                </Grid>
                
            </Grid> 
            <Grid item md={3}>
            <img src={imgLink}/>
            </Grid>
        </Grid>
        
   </Container>
    
    ) 
 }  

export default CardAbout5;