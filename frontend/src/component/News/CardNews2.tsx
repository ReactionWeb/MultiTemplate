import React from 'react';
import {Card, Container, Grid, Paper} from "@material-ui/core";
import {componentProps} from "../ComponentInterface";
import {useStyles} from "../Styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import img1 from "../../static/images/img1.jpg";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Simulate} from "react-dom/test-utils";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const imgLink =
  "https://picsum.photos/500/300";

const CardNews2 = (props: componentProps) => {
    const styles = useStyles();
   
    return(
        <Container className={styles.container}>
            
            <Grid container item md spacing={props.spacing} className={styles.contentTransparentBg} alignItems={"stretch"} >
            
                 
                        <Grid  item md={6} >
                        <Paper  elevation={10} square={true}  style={{ padding: "20px 20px", margin: 20, textAlign: 'center', }}>
                
               <img src={imgLink}  />
              
                <Typography variant="h5" gutterBottom  align='center' >
      
                    {props.mainTitle}
      
                </Typography>
                <Typography variant="body1" paragraph>
                
                {props.mainContent}
    
                </Typography>
            </Paper>
                    
                    </Grid>
           
           
            
                 <Grid container md={6} spacing={props.spacing} direction="column" alignItems={"center"}>
                        <Grid  item md>
                        <Paper  elevation={10} square={true}  style={{ padding: "20px 20px", margin: 20, textAlign: 'center', }}>
                
               <img src={imgLink}  />
              
                <Typography variant="h5" gutterBottom  align='center' >
      
                    {props.mainTitle}
      
                </Typography>
                <Typography variant="body1" paragraph>
                
                {props.mainContent}
    
                </Typography>
            </Paper>
                    
                    </Grid>
                    <Grid  item md direction="column">
                        <Card style={{}}>
                            
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    min-height="900px"
                                    src={img1}
                                    title="Contemplative Reptile"
                                />
                                <CardContent style={{ color: "black"}}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                        </Card>
                    
                    </Grid>
                    </Grid>
             </Grid>
        </Container>
    )
}

export default CardNews2;
