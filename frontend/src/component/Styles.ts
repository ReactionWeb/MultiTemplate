import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme)=>({
    overlayFilling:{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
    },
    overlayGradient:{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: 'linear-gradient( 45deg, rgba(0,0,0,0.5) 49% , 50% ,rgba(0,0,0,0) 50%)',
    },
    overlayImage:{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    container :{
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
    },
    content:{
        position: 'relative',
        padding: theme.spacing(6),
        margin: 0,
    },
    backPaper : {
        position:"absolute",
        height: "300pt",
        width: "300pt",
        backgroundImage: "url(https://picsum.photos/300/300)",
    },
    frontPaper : {
        position:"absolute",
        marginTop: "30pt",
        marginLeft: "-30pt",
        height: "300pt",
        width: "300pt",
        color: theme.palette.common.white,
        backgroundImage: "url(https://picsum.photos/300/300)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },

}))
//