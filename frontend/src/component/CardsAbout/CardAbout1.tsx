import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
                
               <Avatar className={styles.avatarMedum} variant="rounded" alt="Remy Sharp" src={imgLink}  />
              
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

    <Container className={styles.container}> 
        <Grid
        container
        alignItems="center"
        justify="center"
        >
            <Grid container item xs={12} spacing={2} >
                {renderCards()}  
            </Grid> 
        </Grid>
        
   </Container>
  );
}

export default CardAbout1;