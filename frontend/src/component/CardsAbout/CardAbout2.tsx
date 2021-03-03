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



const CardAbout2 = (props : componentProps) =>{
  const styles = useStyles();
  let arr = [1,2,3];

  const renderCards = () => {
    
    return(
       arr.map(()=>{
         return(
            
            <Grid item xs spacing={10}>
            
                <Grid item>
               <Avatar className={styles.avatarMedum} variant="rounded" alt="Remy Sharp" src={imgLink} />
              </Grid>
                
                <Typography variant="body2" paragraph style={{ padding: "20px 10px", marginTop: 20, }}>
                
                {props.mainContent}
    
                </Typography>
                
        </Grid>
       )})
       )
}
  return (

    <Container>
        <Paper>
            {props.children}
        </Paper>
        <Grid
        container
        alignItems="center"
       
        >
            <Grid container xs={12} spacing={2} alignItems="center">
                {renderCards()}  
            </Grid> 
        </Grid>
        
   </Container>
  );
}

export default CardAbout2;