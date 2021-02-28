import React from 'react';
import {Box, Button, Container, IconButton} from "@material-ui/core";
import AccessibleForward from "@material-ui/icons/AccessibleForward"
import {useState} from 'react';
import {useStyles} from "../Styles";
import {componentProps} from "../ComponentInterface";

const Changer = (props:componentProps) => {
    let styles = useStyles();
    const children = React.Children.toArray(props.children);

    let [componentIndex, setComponentIndex] = useState(0);
    let [component, setComponent] = useState(children[0]);

    const changerHandler = (event:any) => {
        (componentIndex >= children.length-1) ? setComponentIndex(0) : setComponentIndex(componentIndex+1);
        console.log(componentIndex);
        setComponent(children[componentIndex]);
    }

    return(
        <Container>
            <Box zIndex={"modal"} style={{position:"absolute"}}>
                <Button onClick={changerHandler} className={styles.contentTransparentBg} style={{padding:"3px"}}>
                    <AccessibleForward   fontSize="large"/>
                    Далее
                </Button>
            </Box>
            {component}
        </Container>
    )
}

export default Changer;
