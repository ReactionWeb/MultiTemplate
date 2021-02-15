import React from "react";
import ReactDOM from "react-dom";

import { Divider, Avatar, Grid, Paper, Typography, Container } from "@material-ui/core";
import {componentProps} from "../ComponentInterface";
import {useStyles} from "../Styles";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

  const Comments = (props : componentProps) => {
    const styles = useStyles();
    return (
      <Container className={styles.container}> 
      <h1>Comments</h1>
      <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid 
          >
            <Avatar className={styles.avatarLarge} alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <Typography variant="body1" paragraph>
                            {props.mainContent}
                        </Typography>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={styles.avatarLarge} alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <Typography variant="body1" paragraph>
                            {props.mainContent}
                        </Typography>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
      </Paper>
      </Container>
  );
}

export default Comments;