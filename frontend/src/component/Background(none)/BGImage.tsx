import React from 'react';
import {Box} from "@material-ui/core";
import {overlayProps} from "../ComponentInterface";
import {useStyles} from "../Styles"
import img1 from "../../static/images/img1.jpg"


const OverlayImage = (props : overlayProps) => {
    const styles = useStyles();
    return(
        <Box className={styles.overlayImage} style={{backgroundImage: "src(https://picsum.photos/1280/1920)"}}/>
    )
}

export default OverlayImage;
//style={{backgroundImage: "src(https://picsum.photos/1280/1920)"}}