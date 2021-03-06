import React from 'react';
import {Box} from "@material-ui/core";
import {overlayProps} from "../ComponentInterface";
import {useStyles} from "../Styles";

const OverlayGradientTransparent = (props : overlayProps) => {
    const styles = useStyles();
    return(
        <Box className={styles.overlayGradientTransparent}/>
    )
}

export default OverlayGradientTransparent;