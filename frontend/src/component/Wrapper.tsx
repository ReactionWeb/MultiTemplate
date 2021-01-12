import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container, Paper, Grid, Typography, Button, makeStyles} from "@material-ui/core";
import Header1 from "./Headers/Header1";

import OverlayFilling from "./Overlays/OverlayFilling";
import OverlayGradient from "./Overlays/OverlayGradient";
import OverlayImage from "./Overlays/OverlayImage";

import CardMap1 from "./CardMaps/CardMap1";
import Preface from "./Preface/Preface";
import FormCallMeBack from "./Forms/FormCallMeBack";



const useStyles = makeStyles((theme) => ({
    mainFeaturesPost :{
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
    },
    mainFeaturesPostContent:{
        position: 'relative',
        padding: theme.spacing(6),
    },
}))


const Wrapper = () => {
    const styles = useStyles();
    return(
        <BrowserRouter>
            <Header1/>
            <main>
                <Preface>
                    <OverlayImage/>
                    <OverlayFilling/>
                    <OverlayGradient/>
                </Preface>

                <Container fixed>
                    <Grid container justify={"flex-end"}>
                        <Grid item md={8}  className={styles.mainFeaturesPost}>
                            <CardMap1/>
                        </Grid>
                    </Grid>
                </Container>
                <FormCallMeBack/>
                <CardMap1>
                    <OverlayImage/>
                    <OverlayFilling/>
                </CardMap1>
            </main>
            {/*Хэдеры*/}
            {/*Виджеты*/}
            {/*Карусели*/}
        </BrowserRouter>
    )
}

export default Wrapper;