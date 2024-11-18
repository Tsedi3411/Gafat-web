import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    height: "400px",
    width: "400px",
   
};

const center = {
    
    lat: 37.7749, 
    lng: -122.4194 
};

const MapComponent = ({ latitude, longitude }) => {
    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={{ center }}
                zoom={10}
            >
                <Marker position={{ center }} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;