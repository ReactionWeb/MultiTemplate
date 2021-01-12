import React from 'react';
import {Box} from "@material-ui/core";
import {overlayProps} from "../ComponentInterface";
import {useStyles} from "../Styles"


const OverlayFilling = (props : overlayProps) => {
    const styles = useStyles();
    return(
        <Box className={styles.overlayFilling}/>
    )
}

export default OverlayFilling;