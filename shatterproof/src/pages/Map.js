import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import pin from "../locationPin.png";
import "./map.css"

export default class Map extends Component {

    state = {
        viewport: {
           width: "50vw",
           height: "50vh",
           latitude: 42.430472,
           longitude: -123.334102,
           zoom: 16
        },
        userLocation: {}
    };
    componentWillMount(){
        this.setUserLocation();
    }

    setUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
           let setUserLocation = {
               lat: position.coords.latitude,
               long: position.coords.longitude
            };
           let newViewport = {
              height: "50vh",
              width: "50vw",
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              zoom: 15
            };
            this.setState({
              viewport: newViewport,
              userLocation: setUserLocation
           });
        });
      };

    

  render() {
    return (
        <div>
        
        <div>
            <ReactMapGL
                {...this.state.viewport}
                mapStyle="mapbox://styles/mapbox/outdoors-v11"
                onViewportChange={(viewport) => this.setState({viewport})}
                mapboxApiAccessToken={}
            >
            {Object.keys(this.state.userLocation).length !== 0 ? (
                <Marker
                    latitude={this.state.userLocation.lat}
                    longitude={this.state.userLocation.long}
                >
                <img className = "map-image" src={pin}></img>
                </Marker>
                ) : ( 
                    <div></div>
                )}
            </ReactMapGL>
        </div>
        </div>
    );
  }
}

