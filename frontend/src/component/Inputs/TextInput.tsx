import React from 'react';
import {TextField} from "@material-ui/core";
import {inputProps} from "../ComponentInterface";


const TextInput = (props:inputProps) => {
    const clientMessageHandler = (event:any) => {
        props.setValue(event.target.value);
        //name
    }

    return(
        <TextField color={"primary"}
                   variant={"filled"}
                   fullWidth
                   label={"Сообщение"}
                   onChange={clientMessageHandler}
                   multiline
                   rows={7}
                   value={props.value}
                   InputLabelProps={{style:{ color:"#000"}}}
        />
    )
}
export default TextInput;