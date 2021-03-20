import React from 'react';
import {Box} from "@material-ui/core";
import {overlayProps} from "../ComponentInterface";
import {useStyles} from "../Styles";
import {custom_theme} from "../../theme/custom_theme";

const OverlayGradientDark = (props : overlayProps) => {
    const styles = useStyles();
    return(
        <Box className={styles.overlayGradientDark}/>
    )
}

export default OverlayGradientDark;