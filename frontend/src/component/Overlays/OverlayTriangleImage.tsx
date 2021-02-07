import React from 'react';
import {Box} from "@material-ui/core";
import {overlayProps} from "../ComponentInterface";
import {useStyles} from "../Styles"
import img1 from "../../static/images/img1.jpg"

const OverlayTriangleImage = (props : overlayProps) => { //КАК СДЕЛАТЬ?
    const styles = useStyles();
    return(
        <Box className={styles.overlayImage}/>
    )
}

export default OverlayTriangleImage;
//