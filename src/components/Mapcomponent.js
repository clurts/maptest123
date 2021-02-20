/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import mapboxgl from 'mapbox-gl';
import { useState, useEffect } from 'react';

const Mapcomponent = () => {
    const [mapLng, setMapLng] = useState(null);
    const [mapLat, setMapLat] = useState(null);
    const [mapZoom, setMapZoom] = useState(null);

    mapboxgl.accessToken = 'pk.eyJ1IjoiY2x1cnRzIiwiYSI6ImNrY2Q0c2ZvYzBiNG4yc3A5anp1a3BuZG4ifQ.v_p94R2H61ySCiE_kRYNaA'

    useEffect(() => {
        setMapLng(12.58655283549853)
        setMapLat(55.70512146030345)
        setMapZoom(15)
    }, []);
    useEffect(() => {
        let map = new mapboxgl.Map({
            container: 'mapContainer',
            style: 'mapbox://styles/clurts/ckchfn96u218w1iphn1m6u1fc',
            center : [mapLng, mapLat],
            zoom: mapZoom
        })

        let geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
            enableHighAccuracy: true
            },
            trackUserLocation: true
            })
        

        map.addControl(geolocate)
        geolocate.on('geolocate', function() {
            console.log('A geolocate event has occurred.')
            });
    }, [mapLat, mapLng, mapZoom]);
    const style = css`
        height: 50vh
    `;
 
        
    return ( 
        <div className="map" css={style} id="mapContainer">

        </div>
     );
}
 
export default Mapcomponent;