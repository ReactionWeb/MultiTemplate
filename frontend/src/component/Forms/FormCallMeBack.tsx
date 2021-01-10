import React from 'react';
import {Box, Container, Grid, makeStyles} from "@material-ui/core";
import {Card} from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import img1 from "../../static/images/img1.jpg"

const useStyles = makeStyles((theme)=>({

}))

const FormCallMeBack = () => {
    const styles = useStyles();

    return(
        <Container>
            <Grid container>
                <Grid item md={4}>
                    <Box color={"green"}>
                        Две формы
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Box color={"blue"}>
                        Текстфилд
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FormCallMeBack;