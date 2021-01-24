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

const CardMapCustom1 = (props: componentProps) => {
    const styles = useStyles();
    let arr = [1,2,3,4,5,6];

    let sm = props.sm;
    let md = props.md;
    let lg = props.lg;
    let xl = props.xl;
    let justify = props.justify;
    let spacing = props.spacing;
    let partPrimary = props.partPrimary;
    let partSecondary = props.partSecondary;

    const renderCards = () => {
        return(
            arr.map((item)=>(
                <Grid item key={item} sm={sm} md={md} lg={lg} xl={xl}>
                    <Card className={styles.rotation}>
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
            <Grid container className={styles.contentTransparentBg} justify={justify}>
                <Grid item md={partSecondary}>
                    {props.children}
                </Grid>
                <Grid item md={partPrimary}>
                    <Grid container spacing={spacing}>
                        {renderCards()}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CardMapCustom1;
