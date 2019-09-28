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
                    <p className="Mission-Statement"> Shatterproof is a national
                    non-profit organization reversing the course of the addiction
                    crisis in America and is dedicated to ending the devastation
                    addiction causes families. Shatterproof's mission is transforming
                    addiction treatment, shattering stigma of addiction, advocating
                    for federal and state policy change and prayer reform, and supporting
                    and educating the community. </p>

                    <div className="Footer-Logos">
                        <p> hi </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
