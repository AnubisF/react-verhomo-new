import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0ZW1paSIsImEiOiJLaC1SYm5RIn0.STJn5kloSp6G6x2C0-W7IQ';

const data = [
    {
        "location": "Ketokatu 8 90140 Oulu",
        "city": "Oulu",
        "company": "Katariina",
        "name": "Verhoomo & Ompelimo",
        "tel": "045 851 77 10",
        "coordinates": [25.48278, 65.00344]
    }
]
const MapBox = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(25.48278);
    const [lat, setLat] = useState(65.00344);
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        data.forEach((location) => {
            console.log(location)
            new mapboxgl.Marker()
                .setLngLat(location.coordinates)
                .setPopup(new mapboxgl.Popup({offset: 30})
                    .setHTML('<h4>' + location.company + '</h4>' +
                        '<h5>' + location.name + '</h5>' +
                        '<h6>' + location.location + '</h6>' +
                        '<h6>' + location.tel + '</h6>'))
                .addTo(map.current);
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
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default MapBox;
