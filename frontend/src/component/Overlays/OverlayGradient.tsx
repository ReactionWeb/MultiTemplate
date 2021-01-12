import React from 'react';
import {Box} from "@material-ui/core";
import {overlayProps} from "../ComponentInterface";
import {useStyles} from "../Styles";

const OverlayGradient = (props : overlayProps) => {
    const styles = useStyles();
    return(
        <Box className={styles.overlayGradient}/>
    )
}

export default OverlayGradient;