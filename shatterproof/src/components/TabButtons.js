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
        fontSize: '2.0rem',
        fontFamily: 'Roboto'
    },
    input: {
        display: 'none',
  },
};

const  OutlinedButtons=({classes, history})=> {
  return (
    <div className={classes.container}>
        <Button className={classes.button} onClick={()=>history.push('/resources')}>
            Resources
        </Button>
        <Button className={classes.button} onClick={()=> history.push('/tracker')}>
            Track My Progress
        </Button>
        <Button className={classes.button} onClick={()=> history.push('/stigma')}>
            Pledge To End Stigma
        </Button>
        <Button className={classes.button}>
            Community Forum
        </Button>
        <Button className={classes.button}>
            <a href="https://connect.clickandpledge.com/w/Form/4e21c330-0011-430e-a2c0-5400c4ba45d5" target="_blank">DONATE NOW</a>
        </Button>
        <Button className={classes.button}>
            <a href="https://www.shatterproof.org/get-involved" target="_blank">Fundraising</a>
        </Button>
    </div>
    );
}

export default withStyles(styles)(OutlinedButtons);