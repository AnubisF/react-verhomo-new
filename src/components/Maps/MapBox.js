import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0ZW1paSIsImEiOiJLaC1SYm5RIn0.STJn5kloSp6G6x2C0-W7IQ';

const MapBox = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(25.48278);
    const [lat, setLat] = useState(65.00344);
    const [zoom, setZoom] = useState(16);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            {/*<div className="sidebar">*/}
            {/*    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}*/}
            {/*</div>*/}
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default MapBox;
