import React from 'react';
import {Box} from "@material-ui/core";
import {overlayProps} from "../ComponentInterface";
import {useStyles} from "../Styles"
import img1 from "../../static/images/img1.jpg"
import Paper from "@material-ui/core/Paper";


const OverlayImage = (props : overlayProps) => {
    const styles = useStyles();
    return(
        <Box className={styles.overlayImage} style={{backgroundImage: "url(https://picsum.photos/1920/1280)"}}/>
    )
}

export default OverlayImage;
//