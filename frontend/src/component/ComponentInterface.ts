import React from "react";

export interface componentProps{
    children?: React.ReactNode[] | React.ReactNode;
    mainTitle?: string;
    mainContent?: string;

    //--ГРИДЫ
    justify?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
    xs?: 'auto'|true|1|2|3|4|5|6|7|8|9|10|11|12;
    sm?: 'auto'|true|1|2|3|4|5|6|7|8|9|10|11|12;
    md?: 'auto'|true|1|2|3|4|5|6|7|8|9|10|11|12;
    lg?: 'auto'|true|1|2|3|4|5|6|7|8|9|10|11|12;
    xl?: 'auto'|true|1|2|3|4|5|6|7|8|9|10|11|12;
    spacing?:any;
    alignItems?:  "baseline" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    partPrimary?:'auto'|true|1|2|3|4|5|6|7|8|9|10|11|12;
    partSecondary?:'auto'|true|1|2|3|4|5|6|7|8|9|10|11|12;
}

export interface overlayProps extends componentProps{
    color?: string;
}

export interface inputProps{
    value: any|string;
    setValue: (value:any) => void | any;
}