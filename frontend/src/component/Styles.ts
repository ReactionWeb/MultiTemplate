import {makeStyles} from "@material-ui/core";
import img1 from "../static/images/img1.jpg";

export const useStyles = makeStyles((theme)=>({

    avatarLarge: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        
      },

    paperAvatar: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    overlayFilling:{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        borderRadius: "inherit",
    },
    overlayGradient:{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: 'linear-gradient( 45deg, rgba(0,0,0,0.5) 49% , 50% ,rgba(0,0,0,0) 51%)',
        borderRadius: "inherit",
    },
    overlayImage:{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        borderRadius: "inherit",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${img1})`,
    },
    overlayTriangleImage:{

    },
    container :{
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
    },
    contentTransparentBg:{
        position: 'relative',
        color: theme.palette.common.white,
        padding: theme.spacing(4),
        margin: 0,
    },
    contentWhiteBg:{
        backgroundColor: theme.palette.common.white,
        position: 'relative',
        padding: theme.spacing(4),
    },
    lineSpacing:{
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
    },
    absoluteComponent:{
        position:"absolute"
    },

    rotation:{
        rotate: "3deg",
    },


}))
//