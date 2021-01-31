import React from 'react';
import {TextField} from "@material-ui/core";
import {inputProps} from "../ComponentInterface";


const NameInput = (props:inputProps) => {
    const clientNameHandler = (event:any) => {
        props.setValue(event.target.value);
        //name
    }

    return(
        <TextField variant={"filled"} fullWidth label={"Имя"} onChange={clientNameHandler} defaultValue={""} value={props.value}/>
    )
}
export default NameInput;