import {makeStyles} from "@material-ui/core";
import img1 from "../static/images/img1.jpg";

export const useStyles = makeStyles((theme)=>({

    avatarLarge: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        
      },
      avatarMedum: {
        width: theme.spacing(13),
        height: theme.spacing(13),
        margin:"auto"
        
      },
      footer1: {
        paddingTop: theme.spacing(5, 4),
        marginTop: 'auto',
        backgroundColor:
          theme.palette.type === 'dark' ? theme.palette.grey[200] : theme.palette.grey[500],
      },
      footer2: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(6),
        }},
      divCar:{
        display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16)
      }
      },
      paperCard: {
        padding: theme.spacing(4),
        Align: 'center',
        width: 340,
        height: 150
      },
      animLogo: {
        width: 65,
        maxWidth:80,
        height: 450
     
      },
      

    paperAvatar: {
        maxWidth: 400,
        margin: "40px 20px",
        padding: "40px 20px",
        
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
        background: 'linear-gradient( 45deg, rgba(0,0,0,0.5) 59% , 40% ,rgba(0,0,0,0) 51%)',
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
        backgroundImage: `url(https://picsum.photos/1920/500)`,
        // backgroundImage: `url(${img1})`,
    },
    overlayTriangleImage:{

    },
    container :{
        position: 'relative',
        color: theme.palette.common.white,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
    },
    container2 :{
      position: 'relative',
      color: theme.palette.common.white,
      paddingBottom: theme.spacing(4),
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