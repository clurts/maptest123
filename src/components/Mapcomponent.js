import ReactMapGL, { GeolocateControl } from "react-map-gl";
import { useState, useEffect } from 'react';

const Mapcomponent = () => {
   
    const [viewport, setViewport] = useState({
        latitude: 55.70512146030345,
        longitude: 12.58655283549853,
        zoom: 15,
        width: "100vw",
        height: "50vh"
    });
    const geolocateControlStyle= {
        right: 10,
        top: 10
      }; 
    
         
    return ( 
        <ReactMapGL 
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            mapStyle="mapbox://styles/clurts/ckchfn96u218w1iphn1m6u1fc"
            onViewportChange={setViewport}
        >
           <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        showAccuracyCircle={true}
        auto
        /> 
        </ReactMapGL>
     );
}
 
export default Mapcomponent;