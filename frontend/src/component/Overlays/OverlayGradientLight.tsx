import React from 'react';
import {Box} from "@material-ui/core";
import {overlayProps} from "../ComponentInterface";
import {useStyles} from "../Styles";

const OverlayGradientLight = (props : overlayProps) => {
    const styles = useStyles();
    return(
        <Box className={styles.overlayGradientLight}/>
    )
}

export default OverlayGradientLight;