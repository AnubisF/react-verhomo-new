/* eslint import/no-webpack-loader-syntax: off */
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0ZW1paSIsImEiOiJLaC1SYm5RIn0.STJn5kloSp6G6x2C0-W7IQ';

const data = [
    {
        "location": "Ketokatu 8 90140 Oulu",
        "city": "Oulu",
        "company": "Katariina",
        "name": "Verhoomo & Ompelimo",
        "tel": "045 851 77 10",
        "coordinates": [25.48255, 65.00336]
    }
]

// Initialize the geolocate control.
// const geolocate = new mapboxgl.GeolocateControl({
//     positionOptions: {
//         enableHighAccuracy: true
//     },
//     trackUserLocation: true
// });

//add navigation
const nav = new mapboxgl.NavigationControl();


const MapBox = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(25.48255);
    const [lat, setLat] = useState(65.00336);
    const [zoom, setZoom] = useState(17);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });

        // // Add the standart Geolocatecontrol to the map.
        // map.current.addControl(geolocate);
        // map.current.on('load', function() {
        //     geolocate.trigger();
        // });

        // Add GeolocateControl to the map
        map.current.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));

        // Add navigation to the map
        map.current.addControl(nav, 'top-right');

        data.forEach((location) => {
            console.log(location)
            new mapboxgl.Marker({
                color: "#ff0000",
            })
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
