import React from 'react';
import './Home.css';
import { SocialIcon } from 'react-social-icons';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import DemoCarousel from './slideshow.js';
class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="Image-Slideshow">
                    <h1> Our Fighters </h1>
                    <DemoCarousel />
                </div>
                <div className="Body">
                    <br />
                    <p className="Mission-Statement"> Shatterproof is a national
                    non-profit organization reversing the course of the addiction
                    crisis in America and is dedicated to ending the devastation
                    addiction causes families. Shatterproof's mission is transforming
                    addiction treatment, shattering stigma of addiction, advocating
                    for federal and state policy change and prayer reform, and supporting
                    and educating the community. </p>
                </div>
            </div>
        );
    }
}

export default Home;
