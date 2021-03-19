import React from 'react';
import {TextField} from "@material-ui/core";
import {inputProps} from "../ComponentInterface";


const EmailInput = (props:inputProps) => {
    const clientEmailHandler = (event:any) => {
        props.setValue(event.target.value);
        //email
    }

    return(
        <TextField variant={"filled"} fullWidth label={"Email"} onChange={clientEmailHandler} defaultValue={""} value={props.value} style={{ marginTop: '12px'}}/>
    )
}
export default EmailInput;