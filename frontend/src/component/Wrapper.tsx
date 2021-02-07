import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container, Paper, Grid, Typography, Button, makeStyles, Box} from "@material-ui/core";
import Header1 from "./Headers/Header1";

import OverlayFilling from "./Overlays/OverlayFilling";
import OverlayGradient from "./Overlays/OverlayGradient";
import OverlayImage from "./Overlays/OverlayImage";

import CardMap1 from "./CardMaps/CardMap1";
import CardMapCustom1 from "./CardMaps/CardMapCustom1";
import Paragraph from "./Paragraph/Paragraph";
import FormCallMeBack from "./Forms/FormCallMeBack";
import {useStyles} from "./Styles";
import {Content} from "./Content";
import Changer from "./Changer/Changer";


const Wrapper = () => {
    const styles = useStyles();
    return(
        <BrowserRouter>

            <main className={styles.container}>
                <Header1/>
                <OverlayImage/>
                <OverlayFilling/>
                <Box className={styles.container}>
                    <OverlayImage/>
                    <OverlayGradient/>
                    <Paragraph md={6} justify={"flex-start"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}/>
                    <Paragraph md={6} justify={"flex-end"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}/>
                </Box>
                

                {/*<CardMap1>*/}
                {/*    <OverlayImage/>*/}
                {/*    <OverlayFilling/>*/}
                {/*</CardMap1>*/}
                <CardMapCustom1 sm={6} md={4} lg={4} xl={4} justify={"flex-start"} spacing={3} partPrimary={8} partSecondary={4}>
                    <OverlayImage/>
                    <OverlayFilling/>
                    <Paragraph md={12} justify={"center"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}/>
                </CardMapCustom1>
                <FormCallMeBack>
                    <OverlayImage/>
                    <OverlayFilling/>
                </FormCallMeBack>
                {/*<FormCallMeBack/>*/}
                <Changer>
                    <CardMap1>
                        <OverlayImage/>
                        <OverlayFilling/>
                    </CardMap1>

                    <CardMapCustom1 sm={6} md={4} lg={4} xl={4} justify={"flex-start"} spacing={3} partPrimary={8} partSecondary={4}>
                        <OverlayImage/>
                        <OverlayFilling/>
                        <Paragraph md={12} justify={"center"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}/>
                    </CardMapCustom1>

                </Changer>

            </main>
            {/*Хэдеры*/}
            {/*Виджеты*/}
            {/*Карусели*/}
        </BrowserRouter>
    )
}

export default Wrapper;