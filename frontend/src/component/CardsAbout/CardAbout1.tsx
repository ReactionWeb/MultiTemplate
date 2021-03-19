import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Avatar, Grid, Paper,  Container, GridDirection, PropTypes } from "@material-ui/core";
import {useStyles} from "../Styles";
import {componentProps} from "../ComponentInterface";

const imgLink =
  "https://picsum.photos/200/300";



const CardAbout1 = (props : componentProps) =>{
  const styles = useStyles();
  let arr = [1,2,3];

  const renderCards = () => {
    
    return(
       arr.map(()=>{
         return(
            <Grid item xs spacing={10}>
            <Paper  elevation={10} square={true}  style={{ padding: "20px 20px", margin: 20, textAlign: 'center', }}>
                
               <Avatar className={styles.avatarMedum} variant="rounded" src={imgLink}  />
              
                <Typography variant="h5" gutterBottom  align='center' >
      
                    {props.mainTitle}
      
                </Typography>
                
                <Typography variant="body1" paragraph>
                
                {props.mainContent}
    
                </Typography>
            </Paper>
            
        </Grid>
        
       )})
       )
}
  return (
<Container>
<Paper>
            {props.children}
        </Paper>
       
            <Grid className={styles.contentTransparentBg} container item xs={12} spacing={2} alignItems="center" justify="center" >
                {renderCards()}  
            </Grid> 
        
        
   </Container>
  );
}

export default CardAbout1;