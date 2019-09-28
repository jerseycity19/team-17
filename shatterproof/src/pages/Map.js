import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import pin from "../locationPin.png";
import health from "../health.png";
import "./Map.css"

export default class Map extends Component {

    state = {
        viewport: {
           width: "50vw",
           height: "50vh",
           latitude: 40.7250863,
           longitude: -73.9773608,
           zoom: 16
        },
        userLocation: {},
        healthCenters: []
    };
    componentWillMount(){
        this.setUserLocation();
    }

    componentDidMount() {
        this.fetchStationAPI();
    }

    

    fetchStationAPI = () => {
        fetch(`https://data.cityofnewyork.us/resource/f7b6-v6v3.json`)
        .then(res => res.json())
        .then(healthy => {
           this.setState({
              healthCenters: healthy
           });
         });
     };

     loadMarkers = () => {
        return this.state.healthCenters.map(spot => {
          return (
            <Marker
               key={spot.objectid}
               latitude={parseFloat(spot.latitude)}
               longitude={parseFloat(spot.longitude)}
            >
              <img className="map-image" src={health}></img>
            </Marker>
          );
        });
    };

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
                mapboxApiAccessToken={"pk.eyJ1IjoibW9pbmJ1bmciLCJhIjoiY2sxMzZhMDIxMDY2MzNibHNjMnU5aHRlMSJ9.GXYXDzxFExthOz5GLFbPYg"}
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
                {/* {this.loadMarkers()} */}
            </ReactMapGL>
        </div>
        </div>
    );
  }
}
