import React from 'react';
import logo from '../ShatterproofLogo.png';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import OutlinedButtons from '../components/TabButtons.js';
import maps from '../GoogleMaps.PNG';

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

class Resources extends React.Component {
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
                    <p>Treatment Centers Nearby</p>
                </div>
                <div align="center">
                    <p></p>
                </div>
                <div align="center">
                    
                </div>
                <div align="center">
                    <img src={maps}/>
                </div>
                <div align="center">
                    
                </div>
            </div>
        )
    }
}

export default Resources;