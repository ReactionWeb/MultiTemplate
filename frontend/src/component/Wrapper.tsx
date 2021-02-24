import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container, Paper, Grid, Typography, Button, makeStyles, Box} from "@material-ui/core";
import Header1 from "./Headers/Header1";
import Header2 from "./Headers/Header2";
import Footer1 from "./Footers/Footer1";
import Footer2 from "./Footers/Footer2";

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

import CarouselFirst from './Carousel/Carousel1';
import CarouselSecond from './Carousel/Carousel2';

import AvatarCircle from './Reviews/ReviewsPhoto';
import Comments1 from './Comments/Comment1';
import Comments2 from './Comments/Comment2';
import Comments3 from './Comments/Comment3';
import Registr from './logIn/Registration';

import CardAbout1 from './CardsAbout/CardAbout1';
import CardAbout2 from './CardsAbout/CardAbout2';
import CardAbout3 from './CardsAbout/CardAbout3';

import Paragraph2 from "./Paragraph/Paragraph2";
import SignInSide from "./logIn/LoginSide";

const Wrapper = () => {
    const styles = useStyles();
    return(
        <BrowserRouter>
            <Header2/>
            
            <main className={styles.container}>
                
                <OverlayImage/>
                <OverlayFilling/>
                
                <Box className={styles.container}>
                   
                    <OverlayImage/>
                    {/*<OverlayFilling/>*/}
                    <OverlayGradient/>
                    <Paragraph md={6} justify={"flex-start"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}/>
                    <Paragraph md={6} justify={"flex-end"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}/>
                </Box>

                

                <Paragraph2  alignItems={"flex-end"} md={6} spacing={10}  justify={"flex-start"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent3}> 
                <OverlayImage/>
                </Paragraph2>
                <Paragraph2 alignItems={"flex-start"} md={8} spacing={10} justify={"flex-end"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}/>

                <CardAbout3 mainTitle={Content.LoremContent} mainContent={Content.LoremContent3}/>
                {/*<CardMap1>*/}
                {/*    <OverlayImage/>*/}
                {/*    <OverlayFilling/>*/}
                {/*</CardMap1>*/}
                <CardMapCustom1 sm={6} md={4} lg={4} xl={4} justify={"flex-start"} spacing={3} partPrimary={8} partSecondary={4}>
                    <OverlayImage/>
                    <OverlayFilling/>
                    <Paragraph md={12} justify={"center"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}/>
                    
                </CardMapCustom1>
                <Comments2 mainContent={Content.LoremContent2} mainTitle={Content.LoremContent} />
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
            <Footer2/>
            {/*Хэдеры*/}
            {/*Виджеты*/}
            {/*Карусели*/}
           
        </BrowserRouter>
    )
}

export default Wrapper;