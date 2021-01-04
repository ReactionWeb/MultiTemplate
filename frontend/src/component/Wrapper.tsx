import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container, Paper, Grid, Typography, Button, makeStyles} from "@material-ui/core";
import Header1 from "./Headers/Header1";
import Overlay1 from "./Overlays/Overlay1";
import CardMap1 from "./CardMaps/CardMap1";

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
                <Paper className={styles.mainFeaturesPost}
                    style={{backgroundImage:'url(https://source.unsplash.com/random)'}}>
                    <Container fixed>
                        <Overlay1/>
                            <Grid container>
                                <Grid item md={6}>
                                    <div className={styles.mainFeaturesPostContent}>
                                        <Typography variant="h4" gutterBottom>
                                            Lorem ipsum
                                        </Typography>
                                        <Typography variant="h6" paragraph>
                                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Typography>
                                        <Button variant={"contained"} color={"secondary"}>
                                            More
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                    </Container>
                </Paper>
                <CardMap1/>
            </main>
            {/*Хэдеры*/}
            {/*Виджеты*/}
            {/*Карусели*/}
        </BrowserRouter>
    )
}

export default Wrapper;