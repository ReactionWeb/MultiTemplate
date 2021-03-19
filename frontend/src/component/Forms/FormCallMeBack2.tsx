import React from 'react';
import {Box, Button, Container, Grid, TextField, Typography, CardContent, Card} from "@material-ui/core";
import {useState} from 'react';
import {useStyles} from "../Styles";
import {componentProps} from "../ComponentInterface";
import PhoneInput from "../Inputs/PhoneInput"
import NameInput from "../Inputs/NameInput";
import TextInput from "../Inputs/TextInput";
import EmailInput from "../Inputs/EmailInput";

const FormCallMeBackSecond = (props:componentProps) => {
    let styles = useStyles();
    let [number, setNumber] = useState('+7');
    let [name, setName] = useState('');
    let [message, setMessage] = useState('Message');
    let [email, setEmail] = useState('Email')

    return(
        <Container>
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
                        <Grid container spacing={2} className={styles.contentWhiteBg} justify="space-evenly">
                                <Grid item md={4} sm={12} xs={12} >
                                    <NameInput value={name} setValue={setName}/>
                                    <br className={styles.lineSpacing}/>
                                    <PhoneInput value={number} setValue={setNumber}/>
                                    <br className={styles.lineSpacing}/>
                                    <EmailInput value={email} setValue={setEmail}/>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12} >
                                    <TextInput value={message} setValue={setMessage} rows={10}/>
                                </Grid>
                                <Grid container justify={"center"} className={styles.lineSpacing}>
                            <Grid item>
                                <Button variant={"contained"} color={"secondary"}>Send message</Button>
                            </Grid>
                        </Grid>
                        
                        </Grid>
                    </CardContent>
                </Card>
        </Container>
    )
}

export default FormCallMeBackSecond;