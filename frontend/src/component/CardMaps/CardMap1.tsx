import React from 'react';
import {Container, Grid, makeStyles} from "@material-ui/core";
import {Card} from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme)=>({

}))

const CardMap1 = () => {
    const styles = useStyles();

    let arr = [1,2,3,4,5,6,7,8,9];

    const renderCards = () => {
           return(
               arr.map((item)=>(
                    <Grid item key={item} sm={12} md={6} lg={4} xl={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="https://source.unsplash.com/random"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
               ))
           )
    }


    return(
        <Container id={"228"}>
            <Grid container spacing={3}>
                {renderCards()}
            </Grid>
        </Container>
    )
}

export default CardMap1;