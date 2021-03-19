import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Box} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
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
import FormCallMeBackSecond from "./Forms/FormCallMeBack2";
import {useStyles} from "./Styles";
import {Content} from "./Content";
import Changer from "./Changer/Changer";
// import CarouselFirst from './Carousel/Carousel1';
// import CarouselSecond from './Carousel/Carousel2';
//
// import AvatarCircle from './Reviews/ReviewsPhoto';
// import Comments from './Comments/Comment';
import Comments1 from './Comments/Comment1';
import Comments2 from './Comments/Comment2';
import Comments3 from './Comments/Comment3';
import Registr from './logIn/Registration';
import CardAbout1 from './CardsAbout/CardAbout1';
import CardAbout2 from './CardsAbout/CardAbout2';
import CardAbout3 from './CardsAbout/CardAbout3';
import CardAbout4 from './CardsAbout/CardAbout4';
import CardAbout5 from './CardsAbout/CardAbout5';
import CardBoard1 from './CardsAbout/CardBoard1';
import Paragraph2 from "./Paragraph/Paragraph2";
import SignInSide from "./logIn/LoginSide";
import CardNews1 from "./News/CardNews";
import CardNews2 from "./News/CardNews2";
import WidgetContainer from "./Containers/WidgetContainer";
import WidgetBox from "./Containers/WidgetBox";
import {theme} from "../theme/theme";
import CarouselFirst from './Carousel/Carousel1';
import Map from './MapAboutUs';
import ImageGridList from './ImageGrid/ImgGrid';


const Wrapper = () => {
    const styles = useStyles();
    return(
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header2/>
               
                <main className={styles.container}>
                    <OverlayFilling/>

                    <WidgetBox>
                        <Paragraph md={6}
                                   justify={"flex-start"}
                                   mainTitle={Content.LoremContent}
                                   mainContent={Content.LoremContent2}>
                            <OverlayImage/>
                            <OverlayGradient/>
                        </Paragraph>
                    </WidgetBox>



                    <WidgetBox>
                        <Paragraph2  alignItems={"flex-end"}
                                     md={8} spacing={10}
                                     justify={"flex-end"}
                                     mainTitle={Content.LoremContent}
                                     mainContent={Content.LoremContent3}>
                            <OverlayImage/>
                            <OverlayFilling/>
                        </Paragraph2>
                    </WidgetBox>

                    <WidgetBox>
                        <CardBoard1  mainTitle={Content.LoremContent}
                                     mainContent={Content.LoremContent2}>
                            <OverlayImage/>
                        </CardBoard1>
                    </WidgetBox>
                    
                    <WidgetContainer>
                        <ImageGridList/>
                    </WidgetContainer>


                    {/*<CardNews2 md={6} spacing={2} mainTitle={Content.LoremContent} mainContent={Content.LoremContent3}/>*/}
                    
                    <WidgetBox>
                        <CardNews1 mainTitle={Content.LoremContent}
                                    mainContent={Content.LoremContent3}>
                            <OverlayImage/>
                            <OverlayFilling/>
                        </CardNews1>
                    </WidgetBox>
                    <WidgetBox>
                        <CardAbout2 mainTitle={Content.LoremContent}
                                    mainContent={Content.LoremContent3}>
                            <OverlayImage/>
                            <OverlayFilling/>
                        </CardAbout2>
                    </WidgetBox>
                    <WidgetBox>
                        <CardAbout3 mainTitle={Content.LoremContent}
                                    mainContent={Content.LoremContent3}>
                            <OverlayImage/>
                            <OverlayFilling/>
                        </CardAbout3>
                    </WidgetBox>
                    
                    
                    <WidgetBox>
                        <Comments3 mainContent={Content.LoremContent2}
                                   mainTitle={Content.LoremContent}>
                            <OverlayImage/>
                            <OverlayFilling/>
                        </Comments3>
                    </WidgetBox>

                    <WidgetBox>
                        <FormCallMeBackSecond>
                            <OverlayImage/>
                            <OverlayFilling/>
                        </FormCallMeBackSecond>
                    </WidgetBox>

                    {/*Ченджер>*/}

                    <WidgetBox>
                        <CardMap1>
                            <OverlayImage/>
                            <OverlayFilling/>
                        </CardMap1>
                    </WidgetBox>

                    <WidgetBox>
                        <CardMapCustom1 sm={6} md={4} lg={4} xl={4} justify={"flex-start"} spacing={3} partPrimary={8} partSecondary={4}>
                            <OverlayImage/>
                            <OverlayFilling/>
                            <Paragraph md={12} justify={"center"} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}/>
                        </CardMapCustom1>
                    </WidgetBox>
                    <WidgetBox>
                        <Map/>
                    </WidgetBox>


                    {/*<WidgetBox>*/}
                    {/*    <Paragraph md={12} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}>*/}
                    {/*        <OverlayImage/>*/}
                    {/*        <OverlayFilling/>*/}
                    {/*    </Paragraph>*/}
                    {/*</WidgetBox>*/}

                    {/*<WidgetContainer>*/}
                    {/*    <Paragraph md={12} mainTitle={Content.LoremContent} mainContent={Content.LoremContent2}>*/}
                    {/*        <OverlayImage/>*/}
                    {/*        <OverlayFilling/>*/}
                    {/*    </Paragraph>*/}
                    {/*</WidgetContainer>*/}
                </main>
                <Footer2/>
                {/*Хэдеры*/}
                {/*Виджеты*/}
                {/*Карусели*/}
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default Wrapper;