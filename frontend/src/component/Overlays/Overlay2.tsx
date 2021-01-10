import React from 'react';
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({

    overlay:{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: 'linear-gradient( 45deg, rgba(0,0,0,1) 49% , 50% ,rgba(0,0,0,0) 50%)',
    },

}))
const Overlay2 = () => {
    const styles = useStyles();
    return(
        <Box className={styles.overlay}/>
    )
}

export default Overlay2;