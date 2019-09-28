import React from 'react';
import './Home.css';
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

class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="Logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="Tabs">
                    <OutlinedButtons/>
                </div>
                <div className="Body">
                    <p> Hello! </p>
                    </div>
            </div>
        );
    }
}

export default Home;
