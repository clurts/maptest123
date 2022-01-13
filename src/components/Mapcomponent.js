import ReactMapGL, { GeolocateControl, NavigationControl } from "react-map-gl";
import { useState } from 'react';


const Mapcomponent = () => {
   
    const [viewport, setViewport] = useState({
        latitude: 55.7051,
        longitude: 12.5865,
        zoom: 15,
        width: "100vw",
        height: "50vh"
    });
    const geolocateControlStyle= {
        right: 20,
        top: 20
      }; 
      const navigationControlStyle= {
        right: 20,
        top: 60
      };
         
    return ( 
        <ReactMapGL 
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v10"
            onViewportChange={setViewport}
        >
        <NavigationControl style={navigationControlStyle}/>
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