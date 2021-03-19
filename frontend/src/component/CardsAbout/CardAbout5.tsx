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
        
        <Container>
            <Paper>
                {props.children}
            </Paper>
            <Grid container direction="row" alignItems={props.alignItems} spacing={props.spacing} justify={props.justify} className={styles.contentTransparentBg}>
            
                
                {/*renderParagraph()*/}
                <Grid item  md={6}>
           
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
                <Grid item md={3} style={{backgroundImage:'url(https://picsum.photos/1920/500)'}}>
                {/*<img src={imgLink}/>**/}
                </Grid>
        </Grid>

   </Container>
    
    ) 
 }  

export default CardAbout5;