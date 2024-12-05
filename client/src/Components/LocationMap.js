import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px',
};

const center = {
    lat: 40.748817,
    lng: -73.985428,
};

const LocationMap = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Use environment variable for the API key

    return (
        <LoadScript
            googleMapsApiKey={apiKey}
            onLoad={() => console.log('Map Loaded')}
            onError={() => console.error('Error loading Google Maps')}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
        
    );
};

export default LocationMap;