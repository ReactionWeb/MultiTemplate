import React from 'react';
import {Card, Container, Grid} from "@material-ui/core";
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

const CardNews1 = (props: componentProps) => {
    const styles = useStyles();
    let arr = [1,2,3,4];

    const renderCards = () => {
        return(
            arr.map((item)=>(
                <Grid item key={item} xs >
                    <Card className={styles.rotation}>
                        
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                min-height="120"
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
            ))
        )
    }

    return(
        <Container className={styles.container}>
            
            <Grid container className={styles.contentTransparentBg} >
            <Typography gutterBottom variant="h4" component="h2">
                News
            </Typography>
                    <Button
                        size="small"
                        color="secondary"
                        variant="outlined"
                        startIcon={<ArrowForwardIcon />}
                        
                    >
                        All news
                    </Button>
                    <Grid container item xs={12} spacing={1}   className={styles.contentTransparentBg}>
                        {renderCards()}
                    </Grid>
            </Grid>
        </Container>
    )
}

export default CardNews1;
