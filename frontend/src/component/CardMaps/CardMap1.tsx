import React from 'react';
import {Box, Container, Grid, makeStyles, Paper} from "@material-ui/core";
import {Card} from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import img1 from "../../static/images/img1.jpg"
import {componentProps} from "../ComponentInterface";
import {useStyles} from "../Styles";


const CardMap1 = (props: componentProps) => {
    const styles = useStyles();

    let arr = [1,2,3,4,5,6];

    const renderCards = () => {
        return(
           arr.map((item)=>(
                <Grid item key={item} sm={12} md={6} lg={4} xl={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                min-height="40"
                                src={img1}
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
        <Container className={styles.container}>
            {props.children}
            <Grid container spacing={3} className={styles.content}>
                {renderCards()}
            </Grid>
        </Container>
    )
}

export default CardMap1;