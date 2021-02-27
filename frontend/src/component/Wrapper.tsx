import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Box} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
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

// import CarouselFirst from './Carousel/Carousel1';
// import CarouselSecond from './Carousel/Carousel2';
//
// import AvatarCircle from './Reviews/ReviewsPhoto';
// import Comments from './Comments/Comment';

import WidgetContainer from "./Containers/WidgetContainer";
import WidgetBox from "./Containers/WidgetBox";

import {theme} from "../theme/theme";

const Wrapper = () => {
    const styles = useStyles();
    return(
        <BrowserRouter>
        <ThemeProvider theme={theme}>
            <main className={styles.container}>
                <Header1/>
                <OverlayImage/>
                <OverlayFilling/>
                <WidgetBox>
                    <Paragraph md={6} justify={"flex-start"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}>
                        <OverlayFilling/>
                    </Paragraph>
                </WidgetBox>

                <CardMapCustom1 sm={6} md={4} lg={4} xl={4} justify={"flex-start"} spacing={3} partPrimary={8} partSecondary={4}>
                    <OverlayImage/>
                    <OverlayFilling/>
                    <Paragraph md={12} justify={"center"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}/>
                </CardMapCustom1>

                <FormCallMeBack>
                    <OverlayImage/>
                    <OverlayFilling/>
                </FormCallMeBack>

                {/*Ченджер>*/}

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

                <WidgetBox>
                    <Paragraph md={12} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}>
                        <OverlayImage/>
                        <OverlayFilling/>
                    </Paragraph>
                </WidgetBox>

                <WidgetContainer>
                    <Paragraph md={12} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}>
                        <OverlayImage/>
                        <OverlayFilling/>
                    </Paragraph>
                </WidgetContainer>
            </main>
        </ThemeProvider>

            {/*Хэдеры*/}
            {/*Виджеты*/}
            {/*Карусели*/}
        </BrowserRouter>
    )
}

export default Wrapper;