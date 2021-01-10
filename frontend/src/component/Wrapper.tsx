import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container, Paper, Grid, Typography, Button, makeStyles} from "@material-ui/core";
import Header1 from "./Headers/Header1";
import Overlay1 from "./Overlays/Overlay1";
import CardMap1 from "./CardMaps/CardMap1";
import Preface from "./Preface/Preface";
import FormCallMeBack from "./Forms/FormCallMeBack";
import Overlay2 from "./Overlays/Overlay2";

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
                    <Overlay1/>
                    <Overlay2/>
                </Preface>

                <Container fixed>
                    <Grid container justify={"flex-end"}>
                        <Grid item md={8}  className={styles.mainFeaturesPost}>
                            <CardMap1/>
                        </Grid>
                    </Grid>
                </Container>
                <FormCallMeBack/>
                <CardMap1/>
            </main>
            {/*Хэдеры*/}
            {/*Виджеты*/}
            {/*Карусели*/}
        </BrowserRouter>
    )
}

export default Wrapper;