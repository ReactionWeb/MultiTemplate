import React from 'react';
import {Box, Container, Grid} from "@material-ui/core";

const FormCallMeBack = () => {

    return(
        <Container>
            <Grid container>
                <Grid item md={4}>
                    <Box color={"green"}>
                        Две формы
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Box color={"blue"}>
                        Текстфилд
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FormCallMeBack;