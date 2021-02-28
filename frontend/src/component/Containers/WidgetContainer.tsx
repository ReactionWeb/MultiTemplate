import React from 'react';
import {Container,Box} from "@material-ui/core";
import {containerProps} from "../ComponentInterface";
import {useStyles} from "../Styles";

const WidgetContainer = (props : containerProps) => {
    const styles = useStyles();

    return(
        <Container className={styles.container}>
            <div>
                {props.children}
            </div>
        </Container>
    )
}

export default WidgetContainer;