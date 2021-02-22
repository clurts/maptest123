import ReactMapboxGl from "react-mapbox-gl";
import { useState, useEffect } from 'react';

const Mapcomponent = () => {
    const [mapLng, setMapLng] = useState(null);
    const [mapLat, setMapLat] = useState(null);
    const [mapZoom, setMapZoom] = useState(null);

    const Map = ReactMapboxGl({
        accessToken: process.env.REACT_APP_MAPBOX_TOKEN
    });

    useEffect(() => {
        setMapLng(12.58655283549853)
        setMapLat(55.70512146030345)
        setMapZoom(15)
    }, []);

    console.log(mapLng,mapLat,mapZoom)
    
        
    return ( 

        //eslint-disable-next-line
        <Map 
            style="mapbox://styles/clurts/ckchfn96u218w1iphn1m6u1fc"
            containerStyle={{
                height: '50vh',
                width: '100vw'
            }}
        />
     );
}
 
export default Mapcomponent;