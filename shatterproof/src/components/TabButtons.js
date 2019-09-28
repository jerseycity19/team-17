import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

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

const  OutlinedButtons=({classes})=> {
  return (
        <div  className={classes.container}>
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
            <Button className={classes.button}>
              <a href="https://connect.clickandpledge.com/w/Form/4e21c330-0011-430e-a2c0-5400c4ba45d5" target="_blank">Donate</a>
            </Button>
            <Button className={classes.button}>
                <a href="https://www.shatterproof.org/get-involved" target="_blank">Fundraise</a>
            </Button>
        </div>
    );
}

export default withStyles(styles)(OutlinedButtons);