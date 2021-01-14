import React from "react";

export interface componentProps{
    children?: React.ReactNode[] | React.ReactNode;
}

export interface overlayProps extends componentProps{
    color?: string;
}