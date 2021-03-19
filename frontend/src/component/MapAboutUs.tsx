import React from 'react';
import { Avatar, Grid, Paper,  Container, Typography, PropTypes } from "@material-ui/core";
import {useStyles} from "./Styles";
import PhoneIcon from '@material-ui/icons/Phone';

const Map = () => {

    const styles = useStyles();
    return (
        <Grid container justify="space-evenly" alignItems="center" xs={12}>
            <iframe className={styles.frameMap} src="https://yandex.ru/map-widget/v1/?um=constructor%3Acf5f933ace17565d3d3d796ddb0bf41f90f7669297a2a77b213091f114398d95&amp;source=constructor" z-index="10000" width="100%" height="400" />
            <Grid item > 
                <Paper style={{position: 'absolute'}}>
                    <Typography gutterBottom variant="h5" component="h2" style={{margin:'10px'}}>
                                    АДРЕС:
                    </Typography>
                    <Typography gutterBottom variant="body2" component="h2" style={{margin:'10px'}}>
                                    Россия, 152907, г. Рыбинск, ул. <br/> 9 мая, д. 9, стр 9, корп А, офис 228
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2" style={{margin:'10px'}}>
                                   <PhoneIcon/> 8 (888) 888 88 88
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2" style={{margin:'10px'}}>
                                   <PhoneIcon/> 8 (888) 888 88 88
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
      )
} 

export default Map;