import React from "react";
import ReactDOM from "react-dom";

import { Avatar, Grid, Paper, Typography, Container, GridDirection, PropTypes } from "@material-ui/core";
import {componentProps} from "../ComponentInterface";
import {useStyles} from "../Styles";
import { Direction } from "readline";

const imgLink =
  "https://picsum.photos/200/300";

  const Comments2 = (props : componentProps) => {
    const styles = useStyles();

    let arr = [1,2,3,4,5,6];

    const renderCards = () => {
      
      return(
         arr.map((item,index)=>{

           let changeRow:GridDirection = (index%2 === 0 )?  "row-reverse": "row"  
           let changeAlign:PropTypes.Alignment = (index%2 === 0 )?  'right': 'left' 
           return(
          
           
          <Grid container   spacing={1} direction={changeRow} justify="center" alignItems="center"   md={12}  >

          <Grid item md={2}>
                <Avatar className={styles.avatarLarge} alt="Remy Sharp" src={imgLink} />
          </Grid>
          
            <Grid item md={10} sm={12} xs={12} >
                <Paper  elevation={10} square={false}  style={{ padding: "20px 20px", marginTop: 20, opacity: 0.9 ,}}>
              <Grid item md={12} direction={changeRow}>
                    <Typography variant="h5" gutterBottom  align={changeAlign} >
    
                            {props.mainTitle}
    
                    </Typography>
                    </Grid>
                    <Typography variant="body1" paragraph>
    
                            {props.mainContent}
    
                    </Typography>
                </Paper>
            </Grid>
           
        </Grid>
        
        
         )})
         )
  }


    return (
      <Container>
      <Typography variant="h2" gutterBottom  align='center' >
        
          {props.mainTitle}

      </Typography>

        {renderCards()}
        
      </Container>
  );
}

export default Comments2;