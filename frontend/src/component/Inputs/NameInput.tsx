import React from 'react';
import {TextField} from "@material-ui/core";
import {inputProps} from "../ComponentInterface";


const NameInput = (props:inputProps) => {
    const clientNameHandler = (event:any) => {
        props.setValue(event.target.value);
        //name
    }

    return(
        <TextField color={"primary"}
                   variant={"filled"}
                   fullWidth label={"Имя"}
                   onChange={clientNameHandler}
                   defaultValue={""}
                   value={props.value}
                   InputLabelProps={{style:{ color:"#000"}}}
        />
    )
}
export default NameInput;