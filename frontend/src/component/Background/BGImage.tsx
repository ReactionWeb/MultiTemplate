import React from 'react';
import {Box} from "@material-ui/core";
import {overlayProps} from "../ComponentInterface";
import {useStyles} from "../Styles"


const OverlayImage = (props : overlayProps) => {
    const styles = useStyles();
    return(
        <Box className={styles.overlayImage} style={{backgroundImage: "url(https://picsum.photos/1280/1920)"}}/>
    )
}

export default OverlayImage;
//