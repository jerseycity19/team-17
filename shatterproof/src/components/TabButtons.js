import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Resources from '../pages/Resources.js';

const styles = {
    container:{
        display:"flex",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: '#6DcBBD',
        height: '16vh',
    },
    button: {
        backgroundColor: '#fffff',
        margin:'auto 0',
        marginLeft: '20px',
        fontSize: '1.3rem',
        fontFamily: 'Roboto'
    },
    input: {
        display: 'none',
  },
};

const OutlinedButtons =({
  history
})=> {
  const classes = useStyles();

const  OutlinedButtons=({classes})=> {
  return (
        <div  className={classes.container}></div>
            <Button className={classes.button}></Button>
    <div>
      <Container>
        <Typography component="div" style={{ backgroundColor: '#6DcBBD', height: '10vh' }}>
            {/* <Button className={classes.button}>
                Home
            </Button> */}
            <Button className={classes.button}>
                Resources
            </Button>
            <Button className={classes.button}>
                Gallery
            </Button>
            <Button className={classes.button}>
                Forum
            </Button>
            <Button className={classes.button}>
                Tracker
            </Button>
            <Button className={classes.button} onClick={()=>history.push('/donate')}>
                <a href="https://connect.clickandpledge.com/w/Form/4e21c330-0011-430e-a2c0-5400c4ba45d5" target="_blank">Donate</a>
            </Button>
            <Button className={classes.button} onClick={()=>history.push('/fundraise')}>
                <a href="https://www.shatterproof.org/get-involved" target="_blank">Fundraise</a>
            </Button>
            {/* <Button className={classes.button}>
                Login
            </Button>
            <Button className={classes.button}>
                Register
            </Button> */}
        </Typography> 
        
      </Container>
      </div>
    );
}

export default OutlinedButtons;
