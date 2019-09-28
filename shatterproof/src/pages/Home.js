import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
//import Grid from "@material-ui/core/Grid";
import logo from '../ShatterproofLogo.png';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="Logo">
                    <img src={logo} className="App-logo" alt="logo" />
                    </div>
                <div className="Body">
                    <p> Hello! </p>
                    </div>
            </div>
        );
    }
}

export default Home;
