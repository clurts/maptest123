/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import ReactMapboxGl from "react-mapbox-gl";
import { useState, useEffect } from 'react';

const Mapcomponent = () => {
    const [mapLng, setMapLng] = useState(null);
    const [mapLat, setMapLat] = useState(null);
    const [mapZoom, setMapZoom] = useState(null);
    const styleUrl = `mapbox://styles/clurts/ckchfn96u218w1iphn1m6u1fc`;

    const Map = ReactMapboxGl({
        accessToken: 'pk.eyJ1IjoiY2x1cnRzIiwiYSI6ImNrbGRxZmR4dTExZnYydXM0cms3d2c4d2sifQ.yMw8k9ubWM_YBv0DJw5bqw'
    });

    useEffect(() => {
        setMapLng(12.58655283549853)
        setMapLat(55.70512146030345)
        setMapZoom(15)
    }, []);
    
    const style = css`
        height: 50vh
    `;
 
        
    return ( 
        <Map 
        css={style}
        style={styleUrl}
        center={[mapLng, mapLat]}
        zoom={[mapZoom]}
        />
     );
}
 
export default Mapcomponent;