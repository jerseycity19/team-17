import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Resources from '../pages/Resources.js';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3),
    backgroundColor: '#fffff',
  },
  input: {
    display: 'none',
  },
}));

const OutlinedButtons =({
  history
})=> {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography component="div" style={{ backgroundColor: '#6DcBBD', height: '10vh' }}>
            <Button className={classes.button} onClick={()=>history.push('/resources')}>
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
        </Typography> 
        
      </Container>
      </div>
    );
}

export default OutlinedButtons;