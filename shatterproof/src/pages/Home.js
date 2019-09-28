import React from 'react';
import PropTypes from 'prop-types';
//import Grid from "@material-ui/core/Grid";
import logo from '../ShatterproofLogo.png';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Home;