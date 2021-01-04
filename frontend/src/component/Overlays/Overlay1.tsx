import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    overlay:{
        position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
    },
}))
const Overlay1 = () => {
    const styles = useStyles();
    return(
        <div className={styles.overlay}/>
    )
}

export default Overlay1;