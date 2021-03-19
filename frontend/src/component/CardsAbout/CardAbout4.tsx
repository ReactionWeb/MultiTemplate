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
  "https://picsum.photos/500/300";



const CardAbout3 = (props : componentProps) =>{
  const styles = useStyles();
  let arr = [1,2];

  const renderCards = () => {
    
    return(
       arr.map(()=>{
         return(
                <Grid  item md={6} >
                    <Paper  elevation={10} square={true}  style={{ padding: "20px 20px", margin: 20, textAlign: 'center', }}>

                    <Grid item md={3} style={{backgroundImage:'url(https://picsum.photos/1920/500)'}}>
                    {/*<img src={imgLink}/>**/}
                    </Grid>
                        
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
        <Grid container item xs={12} spacing={2}  alignItems={"stretch"} className={styles.contentTransparentBg} >
           
                {renderCards()}  
         
        </Grid>
        
   </Container>
  );
}

export default CardAbout3;