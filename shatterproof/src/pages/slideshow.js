import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true}>
                <div>
                    <img src={require('../images/1.jpg')} />
                </div>
                <div>
                    <img src={require('../images/2.jpg')} />
                </div>
                <div>
                    <img src={require('../images/3.jpg')} />
                </div>
                <div>
                    <img src={require('../images/4.jpg')} />
                </div>
                <div>
                    <img src={require('../images/5.jpg')} />
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;
