import mapboxgl from 'mapbox-gl';
import React, {useEffect , useRef} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';


const Map = () => {

    const mapContainerRef = useRef(null);

    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5raXRjZCIsImEiOiJjbHQwMW1hNmMwdXFhMmlsb3g3am5nbnBnIn0.qze98pGRJfSn2I33YwsXgQ';

    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [85.3914, 26.1209],
            zoom : 9,
        })
        new mapboxgl.Marker()
        .setLngLat([85.3914, 26.1209])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('BiteNow, Muzaffarpur')) // Optional: Popup message
        .addTo(map);

        return () => map.remove();
    },[]); 

    return <div ref={mapContainerRef} style={{ width: '100%', height: '50vh' }} />;
}

export default Map;