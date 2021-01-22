import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container, Paper, Grid, Typography, Button, makeStyles} from "@material-ui/core";
import Header1 from "./Headers/Header1";

import OverlayFilling from "./Overlays/OverlayFilling";
import OverlayGradient from "./Overlays/OverlayGradient";
import OverlayImage from "./Overlays/OverlayImage";

import CardMap1 from "./CardMaps/CardMap1";
import CardMapCustom1 from "./CardMaps/CardMapCustom1";
import Preface from "./Preface/Preface";
import FormCallMeBack from "./Forms/FormCallMeBack";
import {useStyles} from "./Styles";
import {Content} from "./Content";


const Wrapper = () => {
    const styles = useStyles();
    return(
        <BrowserRouter>
            <Header1/>
            <main className={styles.container}>
                <OverlayImage/>
                <Preface md={6} justify={"flex-start"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}>
                    <OverlayImage/>
                    {/*<OverlayFilling/>*/}
                    <OverlayGradient/>
                </Preface>
                {/*<CardMap1>*/}
                {/*    <OverlayImage/>*/}
                {/*    <OverlayFilling/>*/}
                {/*</CardMap1>*/}
                <CardMapCustom1 sm={6} md={4} lg={4} xl={4} justify={"flex-start"} spacing={3} partPrimary={8} partSecondary={4}>
                    <OverlayImage/>
                    <OverlayFilling/>
                    <Preface md={12} justify={"center"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}/>
                </CardMapCustom1>
                <FormCallMeBack>
                    <OverlayImage/>
                    <OverlayFilling/>
                </FormCallMeBack>
                {/*<FormCallMeBack/>*/}


            </main>
            {/*Хэдеры*/}
            {/*Виджеты*/}
            {/*Карусели*/}
        </BrowserRouter>
    )
}

export default Wrapper;