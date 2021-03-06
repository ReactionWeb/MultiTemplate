import {createMuiTheme} from "@material-ui/core";

const custom_theme = createMuiTheme({
    palette:{
        primary:{
            // light: "#71D0C5",
            main: "#00003e",
            // dark: "",
        },
        background:{ //на Paper основывается компонент Card
            paper: "#FFF"
        },

        text:{
            primary: "#000",
            secondary: "#FFF",
        }

    }
})

export{
    custom_theme,
}