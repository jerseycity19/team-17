import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
                Donate
            </Button>
        </div>
    );
}

export default withStyles(styles)(OutlinedButtons);
