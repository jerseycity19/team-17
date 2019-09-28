import React from 'react';
import logo from '../ShatterproofLogo.png';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import OutlinedButtons from '../components/TabButtons.js';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(5),
    },
    input: {
      display: 'none',
    },
}));

const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(teal[300]),
      backgroundColor: teal[300],
      '&:hover': {
        backgroundColor: teal[500],
      },
    },
  }))(Button);

class Why extends React.Component {
    render(){
        return(
            <div>
                <div className="Logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="Tabs">
                    <OutlinedButtons/>
                </div>
                <div align="center">
                    <p>Why are you here?</p>
                </div>
                <div align="center">
                    <p></p>
                </div>
                <div align="center">
                    <Button variant="outlined" size="large" color="primary" align="center">
                    Get Help
                    </Button>
                </div>
                <div align="center">
                    <p></p>
                </div>
                <div align="center">
                    <Button variant="outlined" size="large" color="primary" align="center">
                     Give Help
                    </Button>
                </div>
            </div>
        )
    }
}

export default Why;