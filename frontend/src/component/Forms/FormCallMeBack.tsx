import React from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    CardContent,
    Card,
    CardActionArea
} from "@material-ui/core";
import {useStyles} from "../Styles";
import {componentProps} from "../ComponentInterface";


const FormCallMeBack = (props:componentProps) => {
    let styles = useStyles();
    return(
        <Container className={styles.container}>
                {props.children}
                <Card>
                    <CardContent>
                        <Grid container justify={"center"}>
                            <Grid>
                                <Box className={styles.contentTransparentBg}>
                                    <Typography variant={"h4"} gutterBottom> Contact us</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className={styles.contentWhiteBg}>
                                <Grid item md={4} sm={12}>
                                    <TextField variant={"filled"} fullWidth label={"Phone Number"}/>
                                    <TextField variant={"filled"} fullWidth inputMode={"text"} className={styles.lineSpacing} label={"Name"}/>
                                </Grid>
                                <Grid item md={8} sm={12}>
                                    <TextField variant={"filled"} multiline fullWidth rows={7} label={"Message"}/>
                                </Grid>
                        </Grid>
                        <Grid container justify={"center"} className={styles.lineSpacing}>
                            <Grid item>
                                <Button variant={"contained"} color={"secondary"}>Send message</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
        </Container>
    )
}

export default FormCallMeBack;