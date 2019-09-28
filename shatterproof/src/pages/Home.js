import React from 'react';
import './Home.css';
import logo from '../ShatterproofLogo.png';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import OutlinedButtons from '../components/TabButtons.js';
import { SocialIcon } from 'react-social-icons';

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
                    <p className="Mission-Statement"> Shatterproof is a national
                    non-profit organization reversing the course of the addiction
                    crisis in America and is dedicated to ending the devastation
                    addiction causes families. Shatterproof's mission is transforming
                    addiction treatment, shattering stigma of addiction, advocating
                    for federal and state policy change and prayer reform, and supporting
                    and educating the community. </p>

                    <div className="Footer-Logos">
                        <div className="Logos">
                            <SocialIcon url="https://twitter.com/shatterproofhq?lang=en" style={{margin: 8}}/>
                            <SocialIcon url="https://www.facebook.com/ShatterproofHQ/?ref=nf" style={{margin: 8}}/>
                            <SocialIcon url="https://www.instagram.com/weareshatterproof/?hl=en" style={{margin: 8}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
