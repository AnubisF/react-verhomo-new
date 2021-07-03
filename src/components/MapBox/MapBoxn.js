/* global document */
import * as React from 'react';
import {useState} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
import MapBox from "../Maps/MapBox";

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYXJ0ZW1paSIsImEiOiJLaC1SYm5RIn0.STJn5kloSp6G6x2C0-W7IQ'; // Set your mapbox token here

function MapBoxn() {
    const [viewport, setViewport] = useState({
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
        bearing: 0,
        pitch: 0
    });

    return (
        <MapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
        />
    );
}

document.body.style.margin = 0;
render(<MapBoxn />, document.body.appendChild(document.createElement('div')));

export default MapBoxn;