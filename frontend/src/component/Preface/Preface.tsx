import React from 'react';
import {Container, Grid, makeStyles, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import img1 from "../../static/images/img1.jpg"
import {componentProps} from "../ComponentInterface";
import {render} from "react-dom";
import {useStyles} from "../Styles";

const Preface = (props : componentProps) => {
    const styles = useStyles();

    return(
        <Container fixed className={styles.container}>
            <Grid container>
                {props.children}
                <Grid item md={6}>
                    <div className={styles.content}>
                        <Typography variant="h4" gutterBottom>
                            Lorem ipsum
                        </Typography>
                        <Typography variant="h6" paragraph>
                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        <Button variant={"contained"} color={"secondary"}>
                            More
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Preface;