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
import { TypeBackground } from '@material-ui/core/styles/createPalette';
import {custom_theme} from "../../theme/custom_theme"
/* tslint:disable */
const imgLink =
  "https://picsum.photos/200/300";



const CardBoard1 = (props : componentProps) =>{
  const styles = useStyles();
  let arr = [2,3,1,2,2,3,3,2];

  const VarDark = () => {
      return (
          <Grid item xs={6}>
              <Card className={styles.rotation} style={{backgroundColor:custom_theme.palette.primary.dark }}>
                  <CardActionArea>
                      <CardContent>
                          <Typography gutterBottom variant="h4" component="h2" color={"textSecondary"}>
                              Lizard
                          </Typography>
                          <Typography variant="body2" component="p" color={"textSecondary"}>
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                          </Typography>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>
      )
  }

  const VarLight = () => {
      return(
          <Grid item xs={6} >
              <Card className={styles.rotation} style={{backgroundColor:custom_theme.palette.primary.light}}>
                  <CardActionArea>
                      <CardContent>
                          <Typography gutterBottom variant="h4" component="h2" color={"textSecondary"}>
                              Lizard
                          </Typography>
                          <Typography variant="body2" component="p" color={"textSecondary"}>
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                          </Typography>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Grid>
      )
  }

  const renderCards = () => {
        let prev = true;
        let now = false;
    return(
       arr.map(()=>{

        if (now != prev){
            prev = now;
        }else{
            now = !now;
        }
           if(now){
               return(<VarDark/>);
           }else {
               return(<VarLight/>);
           }

       }))
    }


    return (

    <Container>
        <Grid
        container
        alignItems="center"
        justify="center">

            <Paper>
                {props.children}
            </Paper>

            <Grid container item xs={12} spacing={0}  >
                {renderCards()}
            </Grid>
        </Grid>

   </Container>
  );
}

export default CardBoard1;