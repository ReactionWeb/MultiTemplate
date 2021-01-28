import React from 'react';
import {TextField} from "@material-ui/core";
import {inputProps} from "../ComponentInterface";


const PhoneInput = (props:inputProps) => {
    const phoneNumberHandler = (event:any) => {
        event.preventDefault();
        let str = event.target.value.replace(/\D/g,'');
        console.log(str);
        let pattern = `+7 ${'('+str[1]}${str[2]}${str[3]}${')'+str[4]}${str[5]}${str[6]}${'-'+str[7]}${str[8]}${'-'+str[9]}${str[10]}`;
        pattern = pattern.replace(/(-undefined)|(undefined)|((\D)undefined)/g,'');
        props.setValue(pattern);
        //+7 999 786 79 56
    }

    return(
        <TextField variant={"filled"} fullWidth label={"Phone Number"} onChange={phoneNumberHandler} defaultValue={"+7"} value={props.value}/>
    )
}
export default PhoneInput;