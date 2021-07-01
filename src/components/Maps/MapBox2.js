import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0ZW1paSIsImEiOiJLaC1SYm5RIn0.STJn5kloSp6G6x2C0-W7IQ';

class MapBox2 extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            lng: -60,
            lat: 80,
            zoom: 5
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })
    }

    render(){
        return(
            <div>
                <div ref={el => this.mapContainer = el} style={{width:'100%', height:'100%'}} />
            </div>
        )
    }
}

export default MapBox2;